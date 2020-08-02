/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.signal = (function() {

    /**
     * Namespace signal.
     * @exports signal
     * @namespace
     */
    var signal = {};

    signal.SignalRequest = (function() {

        /**
         * Properties of a SignalRequest.
         * @memberof signal
         * @interface ISignalRequest
         */

        /**
         * Constructs a new SignalRequest.
         * @memberof signal
         * @classdesc Represents a SignalRequest.
         * @implements ISignalRequest
         * @constructor
         * @param {signal.ISignalRequest=} [properties] Properties to set
         */
        function SignalRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SignalRequest instance using the specified properties.
         * @function create
         * @memberof signal.SignalRequest
         * @static
         * @param {signal.ISignalRequest=} [properties] Properties to set
         * @returns {signal.SignalRequest} SignalRequest instance
         */
        SignalRequest.create = function create(properties) {
            return new SignalRequest(properties);
        };

        /**
         * Encodes the specified SignalRequest message. Does not implicitly {@link signal.SignalRequest.verify|verify} messages.
         * @function encode
         * @memberof signal.SignalRequest
         * @static
         * @param {signal.ISignalRequest} message SignalRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignalRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SignalRequest message, length delimited. Does not implicitly {@link signal.SignalRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof signal.SignalRequest
         * @static
         * @param {signal.ISignalRequest} message SignalRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignalRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignalRequest message from the specified reader or buffer.
         * @function decode
         * @memberof signal.SignalRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {signal.SignalRequest} SignalRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignalRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.signal.SignalRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SignalRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof signal.SignalRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {signal.SignalRequest} SignalRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignalRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignalRequest message.
         * @function verify
         * @memberof signal.SignalRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignalRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SignalRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof signal.SignalRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {signal.SignalRequest} SignalRequest
         */
        SignalRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.signal.SignalRequest)
                return object;
            return new $root.signal.SignalRequest();
        };

        /**
         * Creates a plain object from a SignalRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof signal.SignalRequest
         * @static
         * @param {signal.SignalRequest} message SignalRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignalRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SignalRequest to JSON.
         * @function toJSON
         * @memberof signal.SignalRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignalRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SignalRequest;
    })();

    signal.IceCandidate = (function() {

        /**
         * Properties of an IceCandidate.
         * @memberof signal
         * @interface IIceCandidate
         * @property {string|null} [url] IceCandidate url
         */

        /**
         * Constructs a new IceCandidate.
         * @memberof signal
         * @classdesc Represents an IceCandidate.
         * @implements IIceCandidate
         * @constructor
         * @param {signal.IIceCandidate=} [properties] Properties to set
         */
        function IceCandidate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IceCandidate url.
         * @member {string} url
         * @memberof signal.IceCandidate
         * @instance
         */
        IceCandidate.prototype.url = "";

        /**
         * Creates a new IceCandidate instance using the specified properties.
         * @function create
         * @memberof signal.IceCandidate
         * @static
         * @param {signal.IIceCandidate=} [properties] Properties to set
         * @returns {signal.IceCandidate} IceCandidate instance
         */
        IceCandidate.create = function create(properties) {
            return new IceCandidate(properties);
        };

        /**
         * Encodes the specified IceCandidate message. Does not implicitly {@link signal.IceCandidate.verify|verify} messages.
         * @function encode
         * @memberof signal.IceCandidate
         * @static
         * @param {signal.IIceCandidate} message IceCandidate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IceCandidate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
            return writer;
        };

        /**
         * Encodes the specified IceCandidate message, length delimited. Does not implicitly {@link signal.IceCandidate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof signal.IceCandidate
         * @static
         * @param {signal.IIceCandidate} message IceCandidate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IceCandidate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IceCandidate message from the specified reader or buffer.
         * @function decode
         * @memberof signal.IceCandidate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {signal.IceCandidate} IceCandidate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IceCandidate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.signal.IceCandidate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an IceCandidate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof signal.IceCandidate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {signal.IceCandidate} IceCandidate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IceCandidate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IceCandidate message.
         * @function verify
         * @memberof signal.IceCandidate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IceCandidate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            return null;
        };

        /**
         * Creates an IceCandidate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof signal.IceCandidate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {signal.IceCandidate} IceCandidate
         */
        IceCandidate.fromObject = function fromObject(object) {
            if (object instanceof $root.signal.IceCandidate)
                return object;
            var message = new $root.signal.IceCandidate();
            if (object.url != null)
                message.url = String(object.url);
            return message;
        };

        /**
         * Creates a plain object from an IceCandidate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof signal.IceCandidate
         * @static
         * @param {signal.IceCandidate} message IceCandidate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IceCandidate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.url = "";
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            return object;
        };

        /**
         * Converts this IceCandidate to JSON.
         * @function toJSON
         * @memberof signal.IceCandidate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IceCandidate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return IceCandidate;
    })();

    signal.OfferRequest = (function() {

        /**
         * Properties of an OfferRequest.
         * @memberof signal
         * @interface IOfferRequest
         * @property {string|null} [userId] OfferRequest userId
         */

        /**
         * Constructs a new OfferRequest.
         * @memberof signal
         * @classdesc Represents an OfferRequest.
         * @implements IOfferRequest
         * @constructor
         * @param {signal.IOfferRequest=} [properties] Properties to set
         */
        function OfferRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OfferRequest userId.
         * @member {string} userId
         * @memberof signal.OfferRequest
         * @instance
         */
        OfferRequest.prototype.userId = "";

        /**
         * Creates a new OfferRequest instance using the specified properties.
         * @function create
         * @memberof signal.OfferRequest
         * @static
         * @param {signal.IOfferRequest=} [properties] Properties to set
         * @returns {signal.OfferRequest} OfferRequest instance
         */
        OfferRequest.create = function create(properties) {
            return new OfferRequest(properties);
        };

        /**
         * Encodes the specified OfferRequest message. Does not implicitly {@link signal.OfferRequest.verify|verify} messages.
         * @function encode
         * @memberof signal.OfferRequest
         * @static
         * @param {signal.IOfferRequest} message OfferRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OfferRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
            return writer;
        };

        /**
         * Encodes the specified OfferRequest message, length delimited. Does not implicitly {@link signal.OfferRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof signal.OfferRequest
         * @static
         * @param {signal.IOfferRequest} message OfferRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OfferRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OfferRequest message from the specified reader or buffer.
         * @function decode
         * @memberof signal.OfferRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {signal.OfferRequest} OfferRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OfferRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.signal.OfferRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OfferRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof signal.OfferRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {signal.OfferRequest} OfferRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OfferRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OfferRequest message.
         * @function verify
         * @memberof signal.OfferRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OfferRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            return null;
        };

        /**
         * Creates an OfferRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof signal.OfferRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {signal.OfferRequest} OfferRequest
         */
        OfferRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.signal.OfferRequest)
                return object;
            var message = new $root.signal.OfferRequest();
            if (object.userId != null)
                message.userId = String(object.userId);
            return message;
        };

        /**
         * Creates a plain object from an OfferRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof signal.OfferRequest
         * @static
         * @param {signal.OfferRequest} message OfferRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OfferRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userId = "";
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this OfferRequest to JSON.
         * @function toJSON
         * @memberof signal.OfferRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OfferRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OfferRequest;
    })();

    signal.OfferResponse = (function() {

        /**
         * Properties of an OfferResponse.
         * @memberof signal
         * @interface IOfferResponse
         * @property {Array.<signal.IIceCandidate>|null} [iceCandidate] OfferResponse iceCandidate
         */

        /**
         * Constructs a new OfferResponse.
         * @memberof signal
         * @classdesc Represents an OfferResponse.
         * @implements IOfferResponse
         * @constructor
         * @param {signal.IOfferResponse=} [properties] Properties to set
         */
        function OfferResponse(properties) {
            this.iceCandidate = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OfferResponse iceCandidate.
         * @member {Array.<signal.IIceCandidate>} iceCandidate
         * @memberof signal.OfferResponse
         * @instance
         */
        OfferResponse.prototype.iceCandidate = $util.emptyArray;

        /**
         * Creates a new OfferResponse instance using the specified properties.
         * @function create
         * @memberof signal.OfferResponse
         * @static
         * @param {signal.IOfferResponse=} [properties] Properties to set
         * @returns {signal.OfferResponse} OfferResponse instance
         */
        OfferResponse.create = function create(properties) {
            return new OfferResponse(properties);
        };

        /**
         * Encodes the specified OfferResponse message. Does not implicitly {@link signal.OfferResponse.verify|verify} messages.
         * @function encode
         * @memberof signal.OfferResponse
         * @static
         * @param {signal.IOfferResponse} message OfferResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OfferResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.iceCandidate != null && message.iceCandidate.length)
                for (var i = 0; i < message.iceCandidate.length; ++i)
                    $root.signal.IceCandidate.encode(message.iceCandidate[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified OfferResponse message, length delimited. Does not implicitly {@link signal.OfferResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof signal.OfferResponse
         * @static
         * @param {signal.IOfferResponse} message OfferResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OfferResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OfferResponse message from the specified reader or buffer.
         * @function decode
         * @memberof signal.OfferResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {signal.OfferResponse} OfferResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OfferResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.signal.OfferResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.iceCandidate && message.iceCandidate.length))
                        message.iceCandidate = [];
                    message.iceCandidate.push($root.signal.IceCandidate.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OfferResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof signal.OfferResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {signal.OfferResponse} OfferResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OfferResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OfferResponse message.
         * @function verify
         * @memberof signal.OfferResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OfferResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.iceCandidate != null && message.hasOwnProperty("iceCandidate")) {
                if (!Array.isArray(message.iceCandidate))
                    return "iceCandidate: array expected";
                for (var i = 0; i < message.iceCandidate.length; ++i) {
                    var error = $root.signal.IceCandidate.verify(message.iceCandidate[i]);
                    if (error)
                        return "iceCandidate." + error;
                }
            }
            return null;
        };

        /**
         * Creates an OfferResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof signal.OfferResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {signal.OfferResponse} OfferResponse
         */
        OfferResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.signal.OfferResponse)
                return object;
            var message = new $root.signal.OfferResponse();
            if (object.iceCandidate) {
                if (!Array.isArray(object.iceCandidate))
                    throw TypeError(".signal.OfferResponse.iceCandidate: array expected");
                message.iceCandidate = [];
                for (var i = 0; i < object.iceCandidate.length; ++i) {
                    if (typeof object.iceCandidate[i] !== "object")
                        throw TypeError(".signal.OfferResponse.iceCandidate: object expected");
                    message.iceCandidate[i] = $root.signal.IceCandidate.fromObject(object.iceCandidate[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an OfferResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof signal.OfferResponse
         * @static
         * @param {signal.OfferResponse} message OfferResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OfferResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.iceCandidate = [];
            if (message.iceCandidate && message.iceCandidate.length) {
                object.iceCandidate = [];
                for (var j = 0; j < message.iceCandidate.length; ++j)
                    object.iceCandidate[j] = $root.signal.IceCandidate.toObject(message.iceCandidate[j], options);
            }
            return object;
        };

        /**
         * Converts this OfferResponse to JSON.
         * @function toJSON
         * @memberof signal.OfferResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OfferResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OfferResponse;
    })();

    signal.SignalService = (function() {

        /**
         * Constructs a new SignalService service.
         * @memberof signal
         * @classdesc Represents a SignalService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function SignalService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (SignalService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = SignalService;

        /**
         * Creates new SignalService service using the specified rpc implementation.
         * @function create
         * @memberof signal.SignalService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {SignalService} RPC service. Useful where requests and/or responses are streamed.
         */
        SignalService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link signal.SignalService#offer}.
         * @memberof signal.SignalService
         * @typedef OfferCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {signal.OfferResponse} [response] OfferResponse
         */

        /**
         * Calls Offer.
         * @function offer
         * @memberof signal.SignalService
         * @instance
         * @param {signal.IOfferRequest} request OfferRequest message or plain object
         * @param {signal.SignalService.OfferCallback} callback Node-style callback called with the error, if any, and OfferResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(SignalService.prototype.offer = function offer(request, callback) {
            return this.rpcCall(offer, $root.signal.OfferRequest, $root.signal.OfferResponse, request, callback);
        }, "name", { value: "Offer" });

        /**
         * Calls Offer.
         * @function offer
         * @memberof signal.SignalService
         * @instance
         * @param {signal.IOfferRequest} request OfferRequest message or plain object
         * @returns {Promise<signal.OfferResponse>} Promise
         * @variation 2
         */

        return SignalService;
    })();

    return signal;
})();

module.exports = $root;
