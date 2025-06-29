import React, { useEffect, useState } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import axios from "axios";
import { CuboidIcon as Wallet } from "lucide-react";
import constants from "../constants";
import { HexString } from "aptos"; // aptos SDK utility
// import constants from "./path/to/constants"; // Add your constants import

export function ConnectWallet() {
    const { connect, disconnect, connected, account, wallet } = useWallet();
    const [isConnecting, setIsConnecting] = useState(false);

    const handleConnect = async () => {
        try {
            setIsConnecting(true);
            console.log("Attempting to connect...");
            await connect("Petra");
            console.log("Connect call completed");
            // Account will be available in useEffect after state updates
        } catch (err) {
            console.error("Connection failed:", err);
            setIsConnecting(false);
        }
    };

    // Use useEffect to handle account changes
    useEffect(() => {
        if (connected && account) {
            console.log("Connected account:", account);
            console.log("Account address:", String(account.address));
            console.log("Account public key:", account.publicKey);
            setIsConnecting(false);
            console.log("sending post request")
            axios.post("http://localhost:8000/api/auth/login",{
                wallet: String(account.address),
            })
            .then((response) => {
                console.log(response)
            })
            .catch((err)=> {
                console.log(err)
            })
            
         
        }
    }, [connected, account]);

    const handleDisconnect = async () => {
        try {
            await disconnect();
            console.log("Disconnected");
        } catch (err) {
            console.error("Disconnect failed:", err);
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
                {
                    console.log(String(account.address))
                }
                    <p>Connected: {String(account.address)}</p>
                    <button className="primary-button px-6 py-3 flex items-center space-x-2 mx-auto mb-8" onClick={handleDisconnect}>Disconnect</button>
                </>
            )}
        </div>
    );
}
