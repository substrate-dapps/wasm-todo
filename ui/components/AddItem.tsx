import { Button, Input, Space, Divider, List } from "antd";
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

const AddItem = ({ account, address, signer }: any) => {
  const [loading, setLoading] = useState(false);
  const [newTodo, setTodo] = useState("");

  const addTodoItem = async () => {
    const provider = new WsProvider(WS_PROVIDER);
    const api = new ApiPromise(options({ provider }));

    await api.isReady;

    api.setSigner(signer);

    const abi = new Abi(abiData, api.registry.getChainProperties());

    const contract = new ContractPromise(api, abi, address);
    const gasLimit = api.registry.createType("WeightV2", {
      refTime,
      proofSize,
    }) as any;

    setLoading(true);

    // Send the transaction, like elsewhere this is a normal extrinsic
    // with the same rules as applied in the API (As with the read example,
    // additional params, if required can follow)
    try {
      await contract.tx
        .createTodoItem(
          {
            gasLimit: gasLimit,
            storageDepositLimit,
          },
          newTodo,
          "low"
        )
        .signAndSend(account, async (res: any) => {
          if (res.status.isInBlock) {
            console.log("in a block");
            setLoading(false);
          } else if (res.status.isFinalized) {
            console.log("finalized");
          }
        });
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  return (
    <>
      <Divider />
      <Space>
        <Input
          placeholder="Enter todo item"
          value={newTodo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button type="primary" onClick={addTodoItem} loading={loading}>
          Add
        </Button>
      </Space>
      <Divider />
    </>
  );
};

export default AddItem;
