import { options } from "@astar-network/astar-api";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { Abi, ContractPromise } from "@polkadot/api-contract";
import {
  isWeb3Injected,
  web3Accounts,
  web3Enable,
} from "@polkadot/extension-dapp";
import type {
  InjectedAccountWithMeta,
  InjectedExtension,
} from "@polkadot/extension-inject/types";
import type { WeightV2 } from "@polkadot/types/interfaces";
import { Button, Divider } from "antd";
import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";

import Head from "next/head";
import styles from "../styles/Home.module.css";
import abiData from "./abi";
import GetAllList from "./GetAllList";
import AddItem from "./AddItem";

// local
// const WS_PROVIDER = 'ws://127.0.0.1:9944'

// shibuya
const WS_PROVIDER = "wss://shibuya-rpc.dwellir.com";

const proofSize = 131072;
const refTime = 6219235328;
const storageDepositLimit = null;

const Home: NextPage = () => {
  const [address, setAddress] = useState("");
  const [addressSubmitted, setAddressSubmitted] = useState(false);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState<string>("");
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
  const [extensions, setExtensions] = useState<InjectedExtension[]>([]);

  // load Substrate wallet and set the signer
  const initSubstrateProvider = useCallback(async () => {
    if (!isWeb3Injected) {
      throw new Error("The user does not have any Substrate wallet installed");
    }

    const extensions = await web3Enable("Flipper UI");

    if (extensions.length > 0) {
      setExtensions(extensions);
    }

    // set the first wallet as the signer (we assume there is only one wallet)
    // wallet.substrate.setSigner(extensions[0].signer)

    const injectedAccounts = await web3Accounts();

    if (injectedAccounts.length > 0) {
      setAccounts(injectedAccounts);
    }
  }, []);

  const handleOnSelect = async (event: any) => {
    setAccount(event.target.value);
  };

  const query = async (
    api: ApiPromise,
    contract: ContractPromise,
    address: string
  ) => {
    // (We perform the send from an account, here using Alice's address)
    const { gasRequired, result, output } = await contract.query.getTodoList(
      address,
      {
        gasLimit: api.registry.createType("WeightV2", {
          refTime,
          proofSize,
        }) as WeightV2,
        storageDepositLimit,
      }
    );

    // const result = await api.call.contractsApi.call(address, contract.address, 0, null, null, msg.toU8a(msg.args.map((_) => account.address)))

    // The actual result from RPC as `ContractExecResult`
    console.log(result.toHuman());

    // the gas consumed for contract execution
    console.log(gasRequired.toHuman());

    // check if the call was successful
    if (result.isOk) {
      // output the return value
      console.log("this are todo list Success", output?.toHuman());

      if (output) {
        setValue(output?.toString());
      }
    } else {
      console.error("Error", result.asErr);
    }
  };

  const getLength = async () => {
    const provider = new WsProvider(WS_PROVIDER);
    const api = new ApiPromise(options({ provider }));

    await api.isReady;

    const abi = new Abi(abiData, api.registry.getChainProperties());

    const contract = new ContractPromise(api, abi, address);

    const { gasRequired, result, output } = await contract.query.getTodoLength(
      address,
      {
        gasLimit: api.registry.createType("WeightV2", {
          refTime,
          proofSize,
        }) as WeightV2,
        storageDepositLimit,
      }
    );

    // const result = await api.call.contractsApi.call(address, contract.address, 0, null, null, msg.toU8a(msg.args.map((_) => account.address)))

    // The actual result from RPC as `ContractExecResult`
    console.log(result.toHuman());

    // the gas consumed for contract execution
    console.log(gasRequired.toHuman());

    // check if the call was successful
    if (result.isOk) {
      // output the return value
      console.log("Success", output?.toHuman());

      if (output) {
        setValue(output?.toString());
      }
    } else {
      console.error("Error", result.asErr);
    }
  };

  const getTodoList = async () => {
    const provider = new WsProvider(WS_PROVIDER);
    const api = new ApiPromise(options({ provider }));

    await api.isReady;

    const abi = new Abi(abiData, api.registry.getChainProperties());

    const contract = new ContractPromise(api, abi, address);

    await query(api, contract, address);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Flipper Contract</title>
        <meta name="description" content="Flipper Contract" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {addressSubmitted ? (
          <>
            <h3 className={styles.title}>Flipper Contract</h3>

            <button onClick={initSubstrateProvider}>Load Wallets</button>
            <br />

            <select onChange={handleOnSelect}>
              <option value="">Select Address</option>
              {accounts.map((account) => (
                <option key={account.address} value={account.address}>
                  {account.meta.name} {account.address}
                </option>
              ))}
            </select>
            <h4>{value}</h4>
          </>
        ) : (
          <>
            <h3 className={styles.title}>Provide Contract Address</h3>
            <div className={styles.address}>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <button onClick={(e) => setAddressSubmitted(true)}>Set</button>
            </div>
          </>
        )}
        <Divider />
        <Button onClick={() => getTodoList()}>getTodoList</Button>
        <Divider />
        <Button onClick={() => getLength()}>Get Length</Button>
        <GetAllList
          account={account}
          address={address}
          signer={extensions?.[0]?.signer}
        />
        <AddItem
          account={account}
          address={address}
          signer={extensions?.[0]?.signer}
        />
      </main>
    </div>
  );
};

export default Home;
