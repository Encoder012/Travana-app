import React from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import axios from "axios";
import { CuboidIcon as Wallet } from "lucide-react";

export function ConnectWallet() {
    const { connect, disconnect, connected, account, wallet } = useWallet();

    const handleConnect = async () => {
        try {
            await connect("Petra");
            if (account?.address) {
                await axios.post(`/api/login/`, {
                    wallet: account.address.toString(),
                });
                console.log("Connected:", account.address);
            }
        } catch (err) {
            console.error("Connect failed:", err);
        }
    };

    return (
        <div>
            {!connected ? (
                 <button
              onClick={handleConnect}
              className="primary-button px-6 py-3 flex items-center space-x-2 mx-auto mb-8"
            >
              <Wallet size={20} />
              <span>Connect Wallet</span>
            </button>
            ) : (
                <>
                    <p>Connected: {account.address}</p>
                    <button onClick={disconnect}>Disconnect</button>
                </>
            )}
        </div>
    );
}
