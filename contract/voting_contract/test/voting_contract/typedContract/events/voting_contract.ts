import type * as EventTypes from '../event-types/voting_contract';
import type {ContractPromise} from "@polkadot/api-contract";
import type {ApiPromise} from "@polkadot/api";
import {getEventTypeDescription} from "../shared/utils";
import {handleEventReturn} from "@supercolony/typechain-types";

export default class EventsClass {
	private __nativeContract : ContractPromise;
	private __api : ApiPromise;

	constructor(
		nativeContract : ContractPromise,
		api : ApiPromise,
	) {
		this.__nativeContract = nativeContract;
		this.__api = api;
	}

	public subscribeOnProposalCreatedEvent(callback : (event : EventTypes.ProposalCreated) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			let _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('ProposalCreated', 'voting_contract')) as EventTypes.ProposalCreated);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'ProposalCreated');
	}

	public subscribeOnGetProposalEvent(callback : (event : EventTypes.GetProposal) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			let _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('GetProposal', 'voting_contract')) as EventTypes.GetProposal);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'GetProposal');
	}

	public subscribeOnUserCreatedEvent(callback : (event : EventTypes.UserCreated) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			let _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('UserCreated', 'voting_contract')) as EventTypes.UserCreated);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'UserCreated');
	}

	public subscribeOnProposalStatusChangedEvent(callback : (event : EventTypes.ProposalStatusChanged) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			let _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('ProposalStatusChanged', 'voting_contract')) as EventTypes.ProposalStatusChanged);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'ProposalStatusChanged');
	}

	public subscribeOnProposalVotedEvent(callback : (event : EventTypes.ProposalVoted) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			let _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('ProposalVoted', 'voting_contract')) as EventTypes.ProposalVoted);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'ProposalVoted');
	}


	private __subscribeOnEvent(
		callback : (args: any[], event: any) => void,
		filter : (eventName: string) => boolean = () => true
	) {
		// @ts-ignore
		return this.__api.query.system.events((events) => {
			events.forEach((record: any) => {
				const { event } = record;

				if (event.method == 'ContractEmitted') {
					const [address, data] = record.event.data;

					if (address.toString() === this.__nativeContract.address.toString()) {
						const {args, event} = this.__nativeContract.abi.decodeEvent(data);

						if (filter(event.identifier.toString()))
							callback(args, event);
					}
				}
			});
		});
	}

}