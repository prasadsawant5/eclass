import * as $protobuf from "protobufjs";
/** Namespace signal. */
export namespace signal {

    /** Properties of a SignalRequest. */
    interface ISignalRequest {
    }

    /** Represents a SignalRequest. */
    class SignalRequest implements ISignalRequest {

        /**
         * Constructs a new SignalRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: signal.ISignalRequest);

        /**
         * Creates a new SignalRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignalRequest instance
         */
        public static create(properties?: signal.ISignalRequest): signal.SignalRequest;

        /**
         * Encodes the specified SignalRequest message. Does not implicitly {@link signal.SignalRequest.verify|verify} messages.
         * @param message SignalRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: signal.ISignalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignalRequest message, length delimited. Does not implicitly {@link signal.SignalRequest.verify|verify} messages.
         * @param message SignalRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: signal.ISignalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignalRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignalRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signal.SignalRequest;

        /**
         * Decodes a SignalRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignalRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): signal.SignalRequest;

        /**
         * Verifies a SignalRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignalRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignalRequest
         */
        public static fromObject(object: { [k: string]: any }): signal.SignalRequest;

        /**
         * Creates a plain object from a SignalRequest message. Also converts values to other types if specified.
         * @param message SignalRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: signal.SignalRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignalRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an IceCandidate. */
    interface IIceCandidate {

        /** IceCandidate url */
        url?: (string|null);
    }

    /** Represents an IceCandidate. */
    class IceCandidate implements IIceCandidate {

        /**
         * Constructs a new IceCandidate.
         * @param [properties] Properties to set
         */
        constructor(properties?: signal.IIceCandidate);

        /** IceCandidate url. */
        public url: string;

        /**
         * Creates a new IceCandidate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IceCandidate instance
         */
        public static create(properties?: signal.IIceCandidate): signal.IceCandidate;

        /**
         * Encodes the specified IceCandidate message. Does not implicitly {@link signal.IceCandidate.verify|verify} messages.
         * @param message IceCandidate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: signal.IIceCandidate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IceCandidate message, length delimited. Does not implicitly {@link signal.IceCandidate.verify|verify} messages.
         * @param message IceCandidate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: signal.IIceCandidate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IceCandidate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IceCandidate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signal.IceCandidate;

        /**
         * Decodes an IceCandidate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IceCandidate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): signal.IceCandidate;

        /**
         * Verifies an IceCandidate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IceCandidate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IceCandidate
         */
        public static fromObject(object: { [k: string]: any }): signal.IceCandidate;

        /**
         * Creates a plain object from an IceCandidate message. Also converts values to other types if specified.
         * @param message IceCandidate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: signal.IceCandidate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IceCandidate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OfferRequest. */
    interface IOfferRequest {

        /** OfferRequest userId */
        userId?: (string|null);
    }

    /** Represents an OfferRequest. */
    class OfferRequest implements IOfferRequest {

        /**
         * Constructs a new OfferRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: signal.IOfferRequest);

        /** OfferRequest userId. */
        public userId: string;

        /**
         * Creates a new OfferRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OfferRequest instance
         */
        public static create(properties?: signal.IOfferRequest): signal.OfferRequest;

        /**
         * Encodes the specified OfferRequest message. Does not implicitly {@link signal.OfferRequest.verify|verify} messages.
         * @param message OfferRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: signal.IOfferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OfferRequest message, length delimited. Does not implicitly {@link signal.OfferRequest.verify|verify} messages.
         * @param message OfferRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: signal.IOfferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OfferRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OfferRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signal.OfferRequest;

        /**
         * Decodes an OfferRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OfferRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): signal.OfferRequest;

        /**
         * Verifies an OfferRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OfferRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OfferRequest
         */
        public static fromObject(object: { [k: string]: any }): signal.OfferRequest;

        /**
         * Creates a plain object from an OfferRequest message. Also converts values to other types if specified.
         * @param message OfferRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: signal.OfferRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OfferRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OfferResponse. */
    interface IOfferResponse {

        /** OfferResponse iceCandidate */
        iceCandidate?: (signal.IIceCandidate[]|null);
    }

    /** Represents an OfferResponse. */
    class OfferResponse implements IOfferResponse {

        /**
         * Constructs a new OfferResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: signal.IOfferResponse);

        /** OfferResponse iceCandidate. */
        public iceCandidate: signal.IIceCandidate[];

        /**
         * Creates a new OfferResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OfferResponse instance
         */
        public static create(properties?: signal.IOfferResponse): signal.OfferResponse;

        /**
         * Encodes the specified OfferResponse message. Does not implicitly {@link signal.OfferResponse.verify|verify} messages.
         * @param message OfferResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: signal.IOfferResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OfferResponse message, length delimited. Does not implicitly {@link signal.OfferResponse.verify|verify} messages.
         * @param message OfferResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: signal.IOfferResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OfferResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OfferResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signal.OfferResponse;

        /**
         * Decodes an OfferResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OfferResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): signal.OfferResponse;

        /**
         * Verifies an OfferResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OfferResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OfferResponse
         */
        public static fromObject(object: { [k: string]: any }): signal.OfferResponse;

        /**
         * Creates a plain object from an OfferResponse message. Also converts values to other types if specified.
         * @param message OfferResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: signal.OfferResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OfferResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a SignalService */
    class SignalService extends $protobuf.rpc.Service {

        /**
         * Constructs a new SignalService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new SignalService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SignalService;

        /**
         * Calls Offer.
         * @param request OfferRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and OfferResponse
         */
        public offer(request: signal.IOfferRequest, callback: signal.SignalService.OfferCallback): void;

        /**
         * Calls Offer.
         * @param request OfferRequest message or plain object
         * @returns Promise
         */
        public offer(request: signal.IOfferRequest): Promise<signal.OfferResponse>;
    }

    namespace SignalService {

        /**
         * Callback as used by {@link signal.SignalService#offer}.
         * @param error Error, if any
         * @param [response] OfferResponse
         */
        type OfferCallback = (error: (Error|null), response?: signal.OfferResponse) => void;
    }
}
