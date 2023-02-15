import { Button, Badge, Space, Divider, List } from "antd";
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
import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import ReactJson from "react-json-view";

import Head from "next/head";
import styles from "../styles/Home.module.css";
import abiData from "./abi";

// local
// const WS_PROVIDER = 'ws://127.0.0.1:9944'

// shibuya
const WS_PROVIDER = "wss://shibuya-rpc.dwellir.com";

const proofSize = 131072;
const refTime = 6219235328;
const storageDepositLimit = null;

const GetAllList = ({ account, address, signer }: any) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState();

  const getAllList = async () => {
    const provider = new WsProvider(WS_PROVIDER);
    const api = new ApiPromise(options({ provider }));

    await api.isReady;

    const abi = new Abi(abiData, api.registry.getChainProperties());

    const contract = new ContractPromise(api, abi, address);

    const { gasRequired, result, output } = await contract.query.getAllList(
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
      console.log("Success", output?.toJSON());

      if (output) {
        setValue(output?.toJSON());
      }
    } else {
      console.error("Error", result.asErr);
    }
  };

  return (
    <>
      <Divider />
      <Space>
        <Button type="primary" onClick={getAllList} loading={loading}>
          GetAllList method
        </Button>
      </Space>
      <div style={{ background: "white", padding: "1rem", margin: "1rem" }}>
        <ReactJson src={value as any} />
      </div>
    </>
  );
};

export default GetAllList;
