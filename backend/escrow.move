module Travana::RideManager {
    use std::signer;
    use std::address;
    use std::coin;
    use std::error;
    use std::event;
    use std::string;
    use aptos_framework::aptos_coin::AptosCoin;
    use aptos_framework::token;
    use table::{Self, Table};

    struct Ride has key, store {
        rider: address,
        driver: address,
        amount: u64,
        confirmed_by_rider: bool,
        confirmed_by_driver: bool
    }

    struct RideEscrow has key, store {
        rides: Table<u64, Ride>,
        next_ride_id: u64
    }

    public fun init(account: &signer) {
        move_to(account, RideEscrow {
            rides: table::new<u64, Ride>(),
            next_ride_id: 0
        });
    }

    public fun lock_funds(account: &signer, driver: address, amount: u64): u64 acquires RideEscrow {
        let escrow = borrow_global_mut<RideEscrow>(signer::address_of(account));
        let ride_id = escrow.next_ride_id;
        escrow.next_ride_id = ride_id + 1;

        coin::transfer<AptosCoin>(account, &signer::address_of(account), amount);
        table::add(&mut escrow.rides, ride_id, Ride {
            rider: signer::address_of(account),
            driver: driver,
            amount: amount,
            confirmed_by_rider: false,
            confirmed_by_driver: false
        });

        ride_id
    }

    public fun confirm_ride(account: &signer, ride_id: u64) acquires RideEscrow {
        let escrow = borrow_global_mut<RideEscrow>(signer::address_of(account));
        let ride = table::borrow_mut(&mut escrow.rides, ride_id);
        let sender = signer::address_of(account);

        if (sender == ride.rider) {
            ride.confirmed_by_rider = true;
        } else if (sender == ride.driver) {
            ride.confirmed_by_driver = true;
        } else {
            abort 1; // Unauthorized
        }

        if (ride.confirmed_by_rider && ride.confirmed_by_driver) {
            coin::transfer<AptosCoin>(&signer::address_of(account), &ride.driver, ride.amount);
            table::remove(&mut escrow.rides, ride_id);
        }
    }

    public fun mint_nft(account: &signer, name: vector<u8>, description: vector<u8>, uri: vector<u8>) {
        let collection_name = b"TravanaRideHistory";
        if (!token::collection_exists(account, collection_name)) {
            token::create_collection(
                account,
                collection_name,
                b"Travana Ride NFT Collection",
                uri,
                1000,
                false
            );
        }

        token::create_token(
            account,
            collection_name,
            name,
            description,
            1,
            0,
            uri,
            account,
            0,
            vector::empty<u8>(),
            vector::empty<vector<u8>>(),
            vector::empty<address>()
        );
    }
}
