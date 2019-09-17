// source: gitlab.sz.sensetime.com/gateway/gateway-server/pb/gateway-server-internal.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var github_com_mwitkow_go$proto$validators_validator_pb = require('../../../../github.com/mwitkow/go-proto-validators/validator_pb.js');
goog.object.extend(proto, github_com_mwitkow_go$proto$validators_validator_pb);
var gitlab_sz_sensetime_com_gateway_gateway$server_pb_gateway$server_pb = require('../../../../gitlab.sz.sensetime.com/gateway/gateway-server/pb/gateway-server_pb.js');
goog.object.extend(proto, gitlab_sz_sensetime_com_gateway_gateway$server_pb_gateway$server_pb);
goog.exportSymbol('proto.sensetime.gateway.AlertHitUpdateRequest', null, global);
goog.exportSymbol('proto.sensetime.gateway.AlertHitUpdateResponse', null, global);
goog.exportSymbol('proto.sensetime.gateway.AuthorizationInternalRequest', null, global);
goog.exportSymbol('proto.sensetime.gateway.AuthorizationInternalResponse', null, global);
goog.exportSymbol('proto.sensetime.gateway.DeviceAddRequest', null, global);
goog.exportSymbol('proto.sensetime.gateway.DeviceAddResponse', null, global);
goog.exportSymbol('proto.sensetime.gateway.DeviceDeleteRequest', null, global);
goog.exportSymbol('proto.sensetime.gateway.DeviceDeleteResponse', null, global);
goog.exportSymbol('proto.sensetime.gateway.DeviceGetRequest', null, global);
goog.exportSymbol('proto.sensetime.gateway.DeviceGetResponse', null, global);
goog.exportSymbol('proto.sensetime.gateway.DeviceInfo', null, global);
goog.exportSymbol('proto.sensetime.gateway.DeviceListRequest', null, global);
goog.exportSymbol('proto.sensetime.gateway.DeviceListResponse', null, global);
goog.exportSymbol('proto.sensetime.gateway.DeviceUpdateRequest', null, global);
goog.exportSymbol('proto.sensetime.gateway.DeviceUpdateResponse', null, global);
goog.exportSymbol('proto.sensetime.gateway.DeviceUpdateType', null, global);
goog.exportSymbol('proto.sensetime.gateway.FaceDetectRequest', null, global);
goog.exportSymbol('proto.sensetime.gateway.FaceDetectResponse', null, global);
goog.exportSymbol('proto.sensetime.gateway.FeatureSyncInfo', null, global);
goog.exportSymbol('proto.sensetime.gateway.FeatureSyncListRequest', null, global);
goog.exportSymbol('proto.sensetime.gateway.FeatureSyncListResponse', null, global);
goog.exportSymbol('proto.sensetime.gateway.FeatureSyncStatus', null, global);
goog.exportSymbol('proto.sensetime.gateway.IndexAlertCompareGetRequest', null, global);
goog.exportSymbol('proto.sensetime.gateway.IndexAlertCompareGetResponse', null, global);
goog.exportSymbol('proto.sensetime.gateway.IndexBaseInfoGetRequest', null, global);
goog.exportSymbol('proto.sensetime.gateway.IndexBaseInfoGetResponse', null, global);
goog.exportSymbol('proto.sensetime.gateway.LivenessRequest', null, global);
goog.exportSymbol('proto.sensetime.gateway.LivenessResponse', null, global);
goog.exportSymbol('proto.sensetime.gateway.LogListRequest', null, global);
goog.exportSymbol('proto.sensetime.gateway.LogListResponse', null, global);
goog.exportSymbol('proto.sensetime.gateway.LogListResponse.LogInfo', null, global);
goog.exportSymbol('proto.sensetime.gateway.OperationType', null, global);
goog.exportSymbol('proto.sensetime.gateway.ReFreshTokenRequest', null, global);
goog.exportSymbol('proto.sensetime.gateway.ReFreshTokenResponse', null, global);
goog.exportSymbol('proto.sensetime.gateway.Role', null, global);
goog.exportSymbol('proto.sensetime.gateway.SystemConfigGetRequest', null, global);
goog.exportSymbol('proto.sensetime.gateway.SystemConfigGetResponse', null, global);
goog.exportSymbol('proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig', null, global);
goog.exportSymbol('proto.sensetime.gateway.SystemConfigUpdateRequest', null, global);
goog.exportSymbol('proto.sensetime.gateway.SystemConfigUpdateResponse', null, global);
goog.exportSymbol('proto.sensetime.gateway.SystemLogoUpdateRequest', null, global);
goog.exportSymbol('proto.sensetime.gateway.SystemLogoUpdateResponse', null, global);
goog.exportSymbol('proto.sensetime.gateway.TimeValue', null, global);
goog.exportSymbol('proto.sensetime.gateway.TopItem', null, global);
goog.exportSymbol('proto.sensetime.gateway.UpdateMiddleWareConfigRequest', null, global);
goog.exportSymbol('proto.sensetime.gateway.UpdateMiddleWareConfigResponse', null, global);
goog.exportSymbol('proto.sensetime.gateway.UserAddRequest', null, global);
goog.exportSymbol('proto.sensetime.gateway.UserAddResponse', null, global);
goog.exportSymbol('proto.sensetime.gateway.UserDeleteRequest', null, global);
goog.exportSymbol('proto.sensetime.gateway.UserDeleteResponse', null, global);
goog.exportSymbol('proto.sensetime.gateway.UserGetRequest', null, global);
goog.exportSymbol('proto.sensetime.gateway.UserGetResponse', null, global);
goog.exportSymbol('proto.sensetime.gateway.UserInfo', null, global);
goog.exportSymbol('proto.sensetime.gateway.UserListRequest', null, global);
goog.exportSymbol('proto.sensetime.gateway.UserListResponse', null, global);
goog.exportSymbol('proto.sensetime.gateway.UserUpdateImageRequest', null, global);
goog.exportSymbol('proto.sensetime.gateway.UserUpdateImageResponse', null, global);
goog.exportSymbol('proto.sensetime.gateway.UserUpdatePasswordRequest', null, global);
goog.exportSymbol('proto.sensetime.gateway.UserUpdatePasswordResponse', null, global);
goog.exportSymbol('proto.sensetime.gateway.UserUpdateRequest', null, global);
goog.exportSymbol('proto.sensetime.gateway.UserUpdateResponse', null, global);
goog.exportSymbol('proto.sensetime.gateway.VerifyTokenRequest', null, global);
goog.exportSymbol('proto.sensetime.gateway.VerifyTokenResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.LivenessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.LivenessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.LivenessRequest.displayName = 'proto.sensetime.gateway.LivenessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.LivenessResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.LivenessResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.LivenessResponse.displayName = 'proto.sensetime.gateway.LivenessResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.AuthorizationInternalRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.AuthorizationInternalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.AuthorizationInternalRequest.displayName = 'proto.sensetime.gateway.AuthorizationInternalRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.AuthorizationInternalResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.AuthorizationInternalResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.AuthorizationInternalResponse.displayName = 'proto.sensetime.gateway.AuthorizationInternalResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.AlertHitUpdateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.AlertHitUpdateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.AlertHitUpdateRequest.displayName = 'proto.sensetime.gateway.AlertHitUpdateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.AlertHitUpdateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.AlertHitUpdateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.AlertHitUpdateResponse.displayName = 'proto.sensetime.gateway.AlertHitUpdateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.FeatureSyncInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.FeatureSyncInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.FeatureSyncInfo.displayName = 'proto.sensetime.gateway.FeatureSyncInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.FeatureSyncListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.FeatureSyncListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.FeatureSyncListRequest.displayName = 'proto.sensetime.gateway.FeatureSyncListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.FeatureSyncListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensetime.gateway.FeatureSyncListResponse.repeatedFields_, null);
};
goog.inherits(proto.sensetime.gateway.FeatureSyncListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.FeatureSyncListResponse.displayName = 'proto.sensetime.gateway.FeatureSyncListResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.UserInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensetime.gateway.UserInfo.repeatedFields_, null);
};
goog.inherits(proto.sensetime.gateway.UserInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.UserInfo.displayName = 'proto.sensetime.gateway.UserInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.UserAddRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensetime.gateway.UserAddRequest.repeatedFields_, null);
};
goog.inherits(proto.sensetime.gateway.UserAddRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.UserAddRequest.displayName = 'proto.sensetime.gateway.UserAddRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.UserAddResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.UserAddResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.UserAddResponse.displayName = 'proto.sensetime.gateway.UserAddResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.UserDeleteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.UserDeleteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.UserDeleteRequest.displayName = 'proto.sensetime.gateway.UserDeleteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.UserDeleteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.UserDeleteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.UserDeleteResponse.displayName = 'proto.sensetime.gateway.UserDeleteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.UserUpdateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensetime.gateway.UserUpdateRequest.repeatedFields_, null);
};
goog.inherits(proto.sensetime.gateway.UserUpdateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.UserUpdateRequest.displayName = 'proto.sensetime.gateway.UserUpdateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.UserUpdateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.UserUpdateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.UserUpdateResponse.displayName = 'proto.sensetime.gateway.UserUpdateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.UserUpdateImageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.UserUpdateImageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.UserUpdateImageRequest.displayName = 'proto.sensetime.gateway.UserUpdateImageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.UserUpdateImageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.UserUpdateImageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.UserUpdateImageResponse.displayName = 'proto.sensetime.gateway.UserUpdateImageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.UserUpdatePasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.UserUpdatePasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.UserUpdatePasswordRequest.displayName = 'proto.sensetime.gateway.UserUpdatePasswordRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.UserUpdatePasswordResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.UserUpdatePasswordResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.UserUpdatePasswordResponse.displayName = 'proto.sensetime.gateway.UserUpdatePasswordResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.UserListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.UserListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.UserListRequest.displayName = 'proto.sensetime.gateway.UserListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.UserListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensetime.gateway.UserListResponse.repeatedFields_, null);
};
goog.inherits(proto.sensetime.gateway.UserListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.UserListResponse.displayName = 'proto.sensetime.gateway.UserListResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.UserGetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.UserGetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.UserGetRequest.displayName = 'proto.sensetime.gateway.UserGetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.UserGetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.UserGetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.UserGetResponse.displayName = 'proto.sensetime.gateway.UserGetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.LogListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.LogListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.LogListRequest.displayName = 'proto.sensetime.gateway.LogListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.LogListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensetime.gateway.LogListResponse.repeatedFields_, null);
};
goog.inherits(proto.sensetime.gateway.LogListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.LogListResponse.displayName = 'proto.sensetime.gateway.LogListResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.LogListResponse.LogInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.LogListResponse.LogInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.LogListResponse.LogInfo.displayName = 'proto.sensetime.gateway.LogListResponse.LogInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.DeviceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.DeviceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.DeviceInfo.displayName = 'proto.sensetime.gateway.DeviceInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.DeviceAddRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.DeviceAddRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.DeviceAddRequest.displayName = 'proto.sensetime.gateway.DeviceAddRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.DeviceAddResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.DeviceAddResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.DeviceAddResponse.displayName = 'proto.sensetime.gateway.DeviceAddResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.DeviceDeleteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.DeviceDeleteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.DeviceDeleteRequest.displayName = 'proto.sensetime.gateway.DeviceDeleteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.DeviceDeleteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.DeviceDeleteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.DeviceDeleteResponse.displayName = 'proto.sensetime.gateway.DeviceDeleteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.DeviceUpdateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.DeviceUpdateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.DeviceUpdateRequest.displayName = 'proto.sensetime.gateway.DeviceUpdateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.DeviceUpdateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.DeviceUpdateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.DeviceUpdateResponse.displayName = 'proto.sensetime.gateway.DeviceUpdateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.DeviceListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.DeviceListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.DeviceListRequest.displayName = 'proto.sensetime.gateway.DeviceListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.DeviceListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensetime.gateway.DeviceListResponse.repeatedFields_, null);
};
goog.inherits(proto.sensetime.gateway.DeviceListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.DeviceListResponse.displayName = 'proto.sensetime.gateway.DeviceListResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.DeviceGetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.DeviceGetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.DeviceGetRequest.displayName = 'proto.sensetime.gateway.DeviceGetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.DeviceGetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.DeviceGetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.DeviceGetResponse.displayName = 'proto.sensetime.gateway.DeviceGetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.VerifyTokenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.VerifyTokenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.VerifyTokenRequest.displayName = 'proto.sensetime.gateway.VerifyTokenRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.VerifyTokenResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.VerifyTokenResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.VerifyTokenResponse.displayName = 'proto.sensetime.gateway.VerifyTokenResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.ReFreshTokenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.ReFreshTokenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.ReFreshTokenRequest.displayName = 'proto.sensetime.gateway.ReFreshTokenRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.ReFreshTokenResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.ReFreshTokenResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.ReFreshTokenResponse.displayName = 'proto.sensetime.gateway.ReFreshTokenResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.TimeValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.TimeValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.TimeValue.displayName = 'proto.sensetime.gateway.TimeValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.TopItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.TopItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.TopItem.displayName = 'proto.sensetime.gateway.TopItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.IndexBaseInfoGetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.IndexBaseInfoGetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.IndexBaseInfoGetRequest.displayName = 'proto.sensetime.gateway.IndexBaseInfoGetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.IndexBaseInfoGetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.IndexBaseInfoGetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.IndexBaseInfoGetResponse.displayName = 'proto.sensetime.gateway.IndexBaseInfoGetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.IndexAlertCompareGetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.IndexAlertCompareGetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.IndexAlertCompareGetRequest.displayName = 'proto.sensetime.gateway.IndexAlertCompareGetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.IndexAlertCompareGetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensetime.gateway.IndexAlertCompareGetResponse.repeatedFields_, null);
};
goog.inherits(proto.sensetime.gateway.IndexAlertCompareGetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.IndexAlertCompareGetResponse.displayName = 'proto.sensetime.gateway.IndexAlertCompareGetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.UpdateMiddleWareConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.UpdateMiddleWareConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.UpdateMiddleWareConfigRequest.displayName = 'proto.sensetime.gateway.UpdateMiddleWareConfigRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.UpdateMiddleWareConfigResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.UpdateMiddleWareConfigResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.UpdateMiddleWareConfigResponse.displayName = 'proto.sensetime.gateway.UpdateMiddleWareConfigResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.FaceDetectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.FaceDetectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.FaceDetectRequest.displayName = 'proto.sensetime.gateway.FaceDetectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.FaceDetectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensetime.gateway.FaceDetectResponse.repeatedFields_, null);
};
goog.inherits(proto.sensetime.gateway.FaceDetectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.FaceDetectResponse.displayName = 'proto.sensetime.gateway.FaceDetectResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.SystemConfigGetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.SystemConfigGetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.SystemConfigGetRequest.displayName = 'proto.sensetime.gateway.SystemConfigGetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.SystemConfigGetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensetime.gateway.SystemConfigGetResponse.repeatedFields_, null);
};
goog.inherits(proto.sensetime.gateway.SystemConfigGetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.SystemConfigGetResponse.displayName = 'proto.sensetime.gateway.SystemConfigGetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.displayName = 'proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.SystemConfigUpdateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.SystemConfigUpdateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.SystemConfigUpdateRequest.displayName = 'proto.sensetime.gateway.SystemConfigUpdateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.SystemConfigUpdateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.SystemConfigUpdateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.SystemConfigUpdateResponse.displayName = 'proto.sensetime.gateway.SystemConfigUpdateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.SystemLogoUpdateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.SystemLogoUpdateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.SystemLogoUpdateRequest.displayName = 'proto.sensetime.gateway.SystemLogoUpdateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensetime.gateway.SystemLogoUpdateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensetime.gateway.SystemLogoUpdateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensetime.gateway.SystemLogoUpdateResponse.displayName = 'proto.sensetime.gateway.SystemLogoUpdateResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.LivenessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.LivenessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.LivenessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.LivenessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    videoFile: msg.getVideoFile_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.LivenessRequest}
 */
proto.sensetime.gateway.LivenessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.LivenessRequest;
  return proto.sensetime.gateway.LivenessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.LivenessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.LivenessRequest}
 */
proto.sensetime.gateway.LivenessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setVideoFile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.LivenessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.LivenessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.LivenessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.LivenessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideoFile_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes video_file = 1;
 * @return {!(string|Uint8Array)}
 */
proto.sensetime.gateway.LivenessRequest.prototype.getVideoFile = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes video_file = 1;
 * This is a type-conversion wrapper around `getVideoFile()`
 * @return {string}
 */
proto.sensetime.gateway.LivenessRequest.prototype.getVideoFile_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getVideoFile()));
};


/**
 * optional bytes video_file = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getVideoFile()`
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.LivenessRequest.prototype.getVideoFile_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getVideoFile()));
};


/** @param {!(string|Uint8Array)} value */
proto.sensetime.gateway.LivenessRequest.prototype.setVideoFile = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.LivenessResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.LivenessResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.LivenessResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.LivenessResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    isPassed: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    livenessImageId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.LivenessResponse}
 */
proto.sensetime.gateway.LivenessResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.LivenessResponse;
  return proto.sensetime.gateway.LivenessResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.LivenessResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.LivenessResponse}
 */
proto.sensetime.gateway.LivenessResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPassed(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLivenessImageId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.LivenessResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.LivenessResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.LivenessResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.LivenessResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsPassed();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getLivenessImageId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool is_passed = 1;
 * @return {boolean}
 */
proto.sensetime.gateway.LivenessResponse.prototype.getIsPassed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.sensetime.gateway.LivenessResponse.prototype.setIsPassed = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string liveness_image_id = 2;
 * @return {string}
 */
proto.sensetime.gateway.LivenessResponse.prototype.getLivenessImageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.sensetime.gateway.LivenessResponse.prototype.setLivenessImageId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.AuthorizationInternalRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.AuthorizationInternalRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.AuthorizationInternalRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.AuthorizationInternalRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, ""),
    livenessImageId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.AuthorizationInternalRequest}
 */
proto.sensetime.gateway.AuthorizationInternalRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.AuthorizationInternalRequest;
  return proto.sensetime.gateway.AuthorizationInternalRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.AuthorizationInternalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.AuthorizationInternalRequest}
 */
proto.sensetime.gateway.AuthorizationInternalRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLivenessImageId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.AuthorizationInternalRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.AuthorizationInternalRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.AuthorizationInternalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.AuthorizationInternalRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLivenessImageId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string account = 1;
 * @return {string}
 */
proto.sensetime.gateway.AuthorizationInternalRequest.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.sensetime.gateway.AuthorizationInternalRequest.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.sensetime.gateway.AuthorizationInternalRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.sensetime.gateway.AuthorizationInternalRequest.prototype.setPassword = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string liveness_image_id = 3;
 * @return {string}
 */
proto.sensetime.gateway.AuthorizationInternalRequest.prototype.getLivenessImageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.sensetime.gateway.AuthorizationInternalRequest.prototype.setLivenessImageId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.AuthorizationInternalResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.AuthorizationInternalResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.AuthorizationInternalResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.AuthorizationInternalResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.AuthorizationInternalResponse}
 */
proto.sensetime.gateway.AuthorizationInternalResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.AuthorizationInternalResponse;
  return proto.sensetime.gateway.AuthorizationInternalResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.AuthorizationInternalResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.AuthorizationInternalResponse}
 */
proto.sensetime.gateway.AuthorizationInternalResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.AuthorizationInternalResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.AuthorizationInternalResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.AuthorizationInternalResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.AuthorizationInternalResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.sensetime.gateway.AuthorizationInternalResponse.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.sensetime.gateway.AuthorizationInternalResponse.prototype.setToken = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.AlertHitUpdateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.AlertHitUpdateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.AlertHitUpdateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.AlertHitUpdateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    imageId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    isAlert: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    isProcessed: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.AlertHitUpdateRequest}
 */
proto.sensetime.gateway.AlertHitUpdateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.AlertHitUpdateRequest;
  return proto.sensetime.gateway.AlertHitUpdateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.AlertHitUpdateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.AlertHitUpdateRequest}
 */
proto.sensetime.gateway.AlertHitUpdateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAlert(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsProcessed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.AlertHitUpdateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.AlertHitUpdateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.AlertHitUpdateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.AlertHitUpdateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImageId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIsAlert();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getIsProcessed();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string image_id = 1;
 * @return {string}
 */
proto.sensetime.gateway.AlertHitUpdateRequest.prototype.getImageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.sensetime.gateway.AlertHitUpdateRequest.prototype.setImageId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool is_alert = 2;
 * @return {boolean}
 */
proto.sensetime.gateway.AlertHitUpdateRequest.prototype.getIsAlert = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.sensetime.gateway.AlertHitUpdateRequest.prototype.setIsAlert = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool is_processed = 3;
 * @return {boolean}
 */
proto.sensetime.gateway.AlertHitUpdateRequest.prototype.getIsProcessed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.sensetime.gateway.AlertHitUpdateRequest.prototype.setIsProcessed = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.AlertHitUpdateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.AlertHitUpdateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.AlertHitUpdateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.AlertHitUpdateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.AlertHitUpdateResponse}
 */
proto.sensetime.gateway.AlertHitUpdateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.AlertHitUpdateResponse;
  return proto.sensetime.gateway.AlertHitUpdateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.AlertHitUpdateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.AlertHitUpdateResponse}
 */
proto.sensetime.gateway.AlertHitUpdateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.AlertHitUpdateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.AlertHitUpdateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.AlertHitUpdateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.AlertHitUpdateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.FeatureSyncInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.FeatureSyncInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.FeatureSyncInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.FeatureSyncInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    createdTime: (f = msg.getCreatedTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    syncEndTime: (f = msg.getSyncEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    totalConsumeS: jspb.Message.getFieldWithDefault(msg, 4, 0),
    addFeatureCount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    delFeatureCount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    updateFeatureCount: jspb.Message.getFieldWithDefault(msg, 7, 0),
    updateLevelFeatureCount: jspb.Message.getFieldWithDefault(msg, 8, 0),
    totalFeatureCount: jspb.Message.getFieldWithDefault(msg, 9, 0),
    redFeatureCount: jspb.Message.getFieldWithDefault(msg, 10, 0),
    orangeFeatureCount: jspb.Message.getFieldWithDefault(msg, 11, 0),
    yellowFeatureCount: jspb.Message.getFieldWithDefault(msg, 12, 0),
    syncPkgCount: jspb.Message.getFieldWithDefault(msg, 13, 0),
    totalPkgCount: jspb.Message.getFieldWithDefault(msg, 14, 0),
    process: jspb.Message.getFloatingPointFieldWithDefault(msg, 15, 0.0),
    status: jspb.Message.getFieldWithDefault(msg, 16, 0),
    requestId: jspb.Message.getFieldWithDefault(msg, 17, ""),
    errInfo: jspb.Message.getFieldWithDefault(msg, 18, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.FeatureSyncInfo}
 */
proto.sensetime.gateway.FeatureSyncInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.FeatureSyncInfo;
  return proto.sensetime.gateway.FeatureSyncInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.FeatureSyncInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.FeatureSyncInfo}
 */
proto.sensetime.gateway.FeatureSyncInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedTime(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setSyncEndTime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalConsumeS(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAddFeatureCount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDelFeatureCount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdateFeatureCount(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdateLevelFeatureCount(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalFeatureCount(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRedFeatureCount(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrangeFeatureCount(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setYellowFeatureCount(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSyncPkgCount(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalPkgCount(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setProcess(value);
      break;
    case 16:
      var value = /** @type {!proto.sensetime.gateway.FeatureSyncStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.FeatureSyncInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.FeatureSyncInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.FeatureSyncInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.FeatureSyncInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCreatedTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSyncEndTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTotalConsumeS();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getAddFeatureCount();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getDelFeatureCount();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getUpdateFeatureCount();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getUpdateLevelFeatureCount();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getTotalFeatureCount();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getRedFeatureCount();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getOrangeFeatureCount();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getYellowFeatureCount();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getSyncPkgCount();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getTotalPkgCount();
  if (f !== 0) {
    writer.writeInt64(
      14,
      f
    );
  }
  f = message.getProcess();
  if (f !== 0.0) {
    writer.writeFloat(
      15,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      16,
      f
    );
  }
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getErrInfo();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.sensetime.gateway.FeatureSyncInfo.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.sensetime.gateway.FeatureSyncInfo.prototype.setId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp created_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sensetime.gateway.FeatureSyncInfo.prototype.getCreatedTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.sensetime.gateway.FeatureSyncInfo.prototype.setCreatedTime = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.sensetime.gateway.FeatureSyncInfo.prototype.clearCreatedTime = function() {
  this.setCreatedTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensetime.gateway.FeatureSyncInfo.prototype.hasCreatedTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp sync_end_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sensetime.gateway.FeatureSyncInfo.prototype.getSyncEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.sensetime.gateway.FeatureSyncInfo.prototype.setSyncEndTime = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.sensetime.gateway.FeatureSyncInfo.prototype.clearSyncEndTime = function() {
  this.setSyncEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensetime.gateway.FeatureSyncInfo.prototype.hasSyncEndTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 total_consume_s = 4;
 * @return {number}
 */
proto.sensetime.gateway.FeatureSyncInfo.prototype.getTotalConsumeS = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.sensetime.gateway.FeatureSyncInfo.prototype.setTotalConsumeS = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 add_feature_count = 5;
 * @return {number}
 */
proto.sensetime.gateway.FeatureSyncInfo.prototype.getAddFeatureCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.sensetime.gateway.FeatureSyncInfo.prototype.setAddFeatureCount = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 del_feature_count = 6;
 * @return {number}
 */
proto.sensetime.gateway.FeatureSyncInfo.prototype.getDelFeatureCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.sensetime.gateway.FeatureSyncInfo.prototype.setDelFeatureCount = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 update_feature_count = 7;
 * @return {number}
 */
proto.sensetime.gateway.FeatureSyncInfo.prototype.getUpdateFeatureCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.sensetime.gateway.FeatureSyncInfo.prototype.setUpdateFeatureCount = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 update_level_feature_count = 8;
 * @return {number}
 */
proto.sensetime.gateway.FeatureSyncInfo.prototype.getUpdateLevelFeatureCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.sensetime.gateway.FeatureSyncInfo.prototype.setUpdateLevelFeatureCount = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 total_feature_count = 9;
 * @return {number}
 */
proto.sensetime.gateway.FeatureSyncInfo.prototype.getTotalFeatureCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.sensetime.gateway.FeatureSyncInfo.prototype.setTotalFeatureCount = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 red_feature_count = 10;
 * @return {number}
 */
proto.sensetime.gateway.FeatureSyncInfo.prototype.getRedFeatureCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.sensetime.gateway.FeatureSyncInfo.prototype.setRedFeatureCount = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 orange_feature_count = 11;
 * @return {number}
 */
proto.sensetime.gateway.FeatureSyncInfo.prototype.getOrangeFeatureCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.sensetime.gateway.FeatureSyncInfo.prototype.setOrangeFeatureCount = function(value) {
  jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 yellow_feature_count = 12;
 * @return {number}
 */
proto.sensetime.gateway.FeatureSyncInfo.prototype.getYellowFeatureCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.sensetime.gateway.FeatureSyncInfo.prototype.setYellowFeatureCount = function(value) {
  jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 sync_pkg_count = 13;
 * @return {number}
 */
proto.sensetime.gateway.FeatureSyncInfo.prototype.getSyncPkgCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.sensetime.gateway.FeatureSyncInfo.prototype.setSyncPkgCount = function(value) {
  jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int64 total_pkg_count = 14;
 * @return {number}
 */
proto.sensetime.gateway.FeatureSyncInfo.prototype.getTotalPkgCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/** @param {number} value */
proto.sensetime.gateway.FeatureSyncInfo.prototype.setTotalPkgCount = function(value) {
  jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional float process = 15;
 * @return {number}
 */
proto.sensetime.gateway.FeatureSyncInfo.prototype.getProcess = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 15, 0.0));
};


/** @param {number} value */
proto.sensetime.gateway.FeatureSyncInfo.prototype.setProcess = function(value) {
  jspb.Message.setProto3FloatField(this, 15, value);
};


/**
 * optional FeatureSyncStatus status = 16;
 * @return {!proto.sensetime.gateway.FeatureSyncStatus}
 */
proto.sensetime.gateway.FeatureSyncInfo.prototype.getStatus = function() {
  return /** @type {!proto.sensetime.gateway.FeatureSyncStatus} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/** @param {!proto.sensetime.gateway.FeatureSyncStatus} value */
proto.sensetime.gateway.FeatureSyncInfo.prototype.setStatus = function(value) {
  jspb.Message.setProto3EnumField(this, 16, value);
};


/**
 * optional string request_id = 17;
 * @return {string}
 */
proto.sensetime.gateway.FeatureSyncInfo.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/** @param {string} value */
proto.sensetime.gateway.FeatureSyncInfo.prototype.setRequestId = function(value) {
  jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string err_info = 18;
 * @return {string}
 */
proto.sensetime.gateway.FeatureSyncInfo.prototype.getErrInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/** @param {string} value */
proto.sensetime.gateway.FeatureSyncInfo.prototype.setErrInfo = function(value) {
  jspb.Message.setProto3StringField(this, 18, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.FeatureSyncListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.FeatureSyncListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.FeatureSyncListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.FeatureSyncListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    pageLimit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageOffset: jspb.Message.getFieldWithDefault(msg, 4, 0),
    status: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.FeatureSyncListRequest}
 */
proto.sensetime.gateway.FeatureSyncListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.FeatureSyncListRequest;
  return proto.sensetime.gateway.FeatureSyncListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.FeatureSyncListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.FeatureSyncListRequest}
 */
proto.sensetime.gateway.FeatureSyncListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageLimit(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageOffset(value);
      break;
    case 5:
      var value = /** @type {!proto.sensetime.gateway.FeatureSyncStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.FeatureSyncListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.FeatureSyncListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.FeatureSyncListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.FeatureSyncListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPageLimit();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageOffset();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp start_time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sensetime.gateway.FeatureSyncListRequest.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.sensetime.gateway.FeatureSyncListRequest.prototype.setStartTime = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.sensetime.gateway.FeatureSyncListRequest.prototype.clearStartTime = function() {
  this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensetime.gateway.FeatureSyncListRequest.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sensetime.gateway.FeatureSyncListRequest.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.sensetime.gateway.FeatureSyncListRequest.prototype.setEndTime = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.sensetime.gateway.FeatureSyncListRequest.prototype.clearEndTime = function() {
  this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensetime.gateway.FeatureSyncListRequest.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 page_limit = 3;
 * @return {number}
 */
proto.sensetime.gateway.FeatureSyncListRequest.prototype.getPageLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.sensetime.gateway.FeatureSyncListRequest.prototype.setPageLimit = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 page_offset = 4;
 * @return {number}
 */
proto.sensetime.gateway.FeatureSyncListRequest.prototype.getPageOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.sensetime.gateway.FeatureSyncListRequest.prototype.setPageOffset = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional FeatureSyncStatus status = 5;
 * @return {!proto.sensetime.gateway.FeatureSyncStatus}
 */
proto.sensetime.gateway.FeatureSyncListRequest.prototype.getStatus = function() {
  return /** @type {!proto.sensetime.gateway.FeatureSyncStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.sensetime.gateway.FeatureSyncStatus} value */
proto.sensetime.gateway.FeatureSyncListRequest.prototype.setStatus = function(value) {
  jspb.Message.setProto3EnumField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensetime.gateway.FeatureSyncListResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.FeatureSyncListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.FeatureSyncListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.FeatureSyncListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.FeatureSyncListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    feaSyncInfosList: jspb.Message.toObjectList(msg.getFeaSyncInfosList(),
    proto.sensetime.gateway.FeatureSyncInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.FeatureSyncListResponse}
 */
proto.sensetime.gateway.FeatureSyncListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.FeatureSyncListResponse;
  return proto.sensetime.gateway.FeatureSyncListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.FeatureSyncListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.FeatureSyncListResponse}
 */
proto.sensetime.gateway.FeatureSyncListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
      break;
    case 2:
      var value = new proto.sensetime.gateway.FeatureSyncInfo;
      reader.readMessage(value,proto.sensetime.gateway.FeatureSyncInfo.deserializeBinaryFromReader);
      msg.addFeaSyncInfos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.FeatureSyncListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.FeatureSyncListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.FeatureSyncListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.FeatureSyncListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getFeaSyncInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sensetime.gateway.FeatureSyncInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 total = 1;
 * @return {number}
 */
proto.sensetime.gateway.FeatureSyncListResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.sensetime.gateway.FeatureSyncListResponse.prototype.setTotal = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated FeatureSyncInfo fea_sync_infos = 2;
 * @return {!Array<!proto.sensetime.gateway.FeatureSyncInfo>}
 */
proto.sensetime.gateway.FeatureSyncListResponse.prototype.getFeaSyncInfosList = function() {
  return /** @type{!Array<!proto.sensetime.gateway.FeatureSyncInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sensetime.gateway.FeatureSyncInfo, 2));
};


/** @param {!Array<!proto.sensetime.gateway.FeatureSyncInfo>} value */
proto.sensetime.gateway.FeatureSyncListResponse.prototype.setFeaSyncInfosList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sensetime.gateway.FeatureSyncInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sensetime.gateway.FeatureSyncInfo}
 */
proto.sensetime.gateway.FeatureSyncListResponse.prototype.addFeaSyncInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sensetime.gateway.FeatureSyncInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.sensetime.gateway.FeatureSyncListResponse.prototype.clearFeaSyncInfosList = function() {
  this.setFeaSyncInfosList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensetime.gateway.UserInfo.repeatedFields_ = [12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.UserInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.UserInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.UserInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    role: jspb.Message.getFieldWithDefault(msg, 4, 0),
    idcard: jspb.Message.getFieldWithDefault(msg, 5, ""),
    email: jspb.Message.getFieldWithDefault(msg, 6, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 7, ""),
    extraInfo: jspb.Message.getFieldWithDefault(msg, 8, ""),
    isActivated: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    createdTime: (f = msg.getCreatedTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    enableAllDeviceTags: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    deviceTagsList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f,
    imageUrl: jspb.Message.getFieldWithDefault(msg, 13, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.UserInfo}
 */
proto.sensetime.gateway.UserInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.UserInfo;
  return proto.sensetime.gateway.UserInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.UserInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.UserInfo}
 */
proto.sensetime.gateway.UserInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {!proto.sensetime.gateway.Role} */ (reader.readEnum());
      msg.setRole(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdcard(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setExtraInfo(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActivated(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedTime(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableAllDeviceTags(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.addDeviceTags(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.UserInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.UserInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.UserInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRole();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getIdcard();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getExtraInfo();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getIsActivated();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getCreatedTime();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEnableAllDeviceTags();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getDeviceTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      12,
      f
    );
  }
  f = message.getImageUrl();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional string account = 1;
 * @return {string}
 */
proto.sensetime.gateway.UserInfo.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.sensetime.gateway.UserInfo.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.sensetime.gateway.UserInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.sensetime.gateway.UserInfo.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Role role = 4;
 * @return {!proto.sensetime.gateway.Role}
 */
proto.sensetime.gateway.UserInfo.prototype.getRole = function() {
  return /** @type {!proto.sensetime.gateway.Role} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.sensetime.gateway.Role} value */
proto.sensetime.gateway.UserInfo.prototype.setRole = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string idcard = 5;
 * @return {string}
 */
proto.sensetime.gateway.UserInfo.prototype.getIdcard = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.sensetime.gateway.UserInfo.prototype.setIdcard = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string email = 6;
 * @return {string}
 */
proto.sensetime.gateway.UserInfo.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.sensetime.gateway.UserInfo.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string phone = 7;
 * @return {string}
 */
proto.sensetime.gateway.UserInfo.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.sensetime.gateway.UserInfo.prototype.setPhone = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string extra_info = 8;
 * @return {string}
 */
proto.sensetime.gateway.UserInfo.prototype.getExtraInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.sensetime.gateway.UserInfo.prototype.setExtraInfo = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bool is_activated = 9;
 * @return {boolean}
 */
proto.sensetime.gateway.UserInfo.prototype.getIsActivated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/** @param {boolean} value */
proto.sensetime.gateway.UserInfo.prototype.setIsActivated = function(value) {
  jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional google.protobuf.Timestamp created_time = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sensetime.gateway.UserInfo.prototype.getCreatedTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.sensetime.gateway.UserInfo.prototype.setCreatedTime = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.sensetime.gateway.UserInfo.prototype.clearCreatedTime = function() {
  this.setCreatedTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensetime.gateway.UserInfo.prototype.hasCreatedTime = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool enable_all_device_tags = 11;
 * @return {boolean}
 */
proto.sensetime.gateway.UserInfo.prototype.getEnableAllDeviceTags = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/** @param {boolean} value */
proto.sensetime.gateway.UserInfo.prototype.setEnableAllDeviceTags = function(value) {
  jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * repeated string device_tags = 12;
 * @return {!Array<string>}
 */
proto.sensetime.gateway.UserInfo.prototype.getDeviceTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 12));
};


/** @param {!Array<string>} value */
proto.sensetime.gateway.UserInfo.prototype.setDeviceTagsList = function(value) {
  jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.sensetime.gateway.UserInfo.prototype.addDeviceTags = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.sensetime.gateway.UserInfo.prototype.clearDeviceTagsList = function() {
  this.setDeviceTagsList([]);
};


/**
 * optional string image_url = 13;
 * @return {string}
 */
proto.sensetime.gateway.UserInfo.prototype.getImageUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/** @param {string} value */
proto.sensetime.gateway.UserInfo.prototype.setImageUrl = function(value) {
  jspb.Message.setProto3StringField(this, 13, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensetime.gateway.UserAddRequest.repeatedFields_ = [11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.UserAddRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.UserAddRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.UserAddRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserAddRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    password: jspb.Message.getFieldWithDefault(msg, 3, ""),
    role: jspb.Message.getFieldWithDefault(msg, 4, 0),
    idcard: jspb.Message.getFieldWithDefault(msg, 5, ""),
    email: jspb.Message.getFieldWithDefault(msg, 6, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 7, ""),
    extraInfo: jspb.Message.getFieldWithDefault(msg, 8, ""),
    isActivated: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    enableAllDeviceTags: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    deviceTagsList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    imageBlob: msg.getImageBlob_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.UserAddRequest}
 */
proto.sensetime.gateway.UserAddRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.UserAddRequest;
  return proto.sensetime.gateway.UserAddRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.UserAddRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.UserAddRequest}
 */
proto.sensetime.gateway.UserAddRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 4:
      var value = /** @type {!proto.sensetime.gateway.Role} */ (reader.readEnum());
      msg.setRole(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdcard(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setExtraInfo(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActivated(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableAllDeviceTags(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addDeviceTags(value);
      break;
    case 12:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setImageBlob(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.UserAddRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.UserAddRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.UserAddRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserAddRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRole();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getIdcard();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getExtraInfo();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getIsActivated();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getEnableAllDeviceTags();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getDeviceTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getImageBlob_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      12,
      f
    );
  }
};


/**
 * optional string account = 1;
 * @return {string}
 */
proto.sensetime.gateway.UserAddRequest.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.sensetime.gateway.UserAddRequest.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.sensetime.gateway.UserAddRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.sensetime.gateway.UserAddRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string password = 3;
 * @return {string}
 */
proto.sensetime.gateway.UserAddRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.sensetime.gateway.UserAddRequest.prototype.setPassword = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Role role = 4;
 * @return {!proto.sensetime.gateway.Role}
 */
proto.sensetime.gateway.UserAddRequest.prototype.getRole = function() {
  return /** @type {!proto.sensetime.gateway.Role} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.sensetime.gateway.Role} value */
proto.sensetime.gateway.UserAddRequest.prototype.setRole = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string idcard = 5;
 * @return {string}
 */
proto.sensetime.gateway.UserAddRequest.prototype.getIdcard = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.sensetime.gateway.UserAddRequest.prototype.setIdcard = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string email = 6;
 * @return {string}
 */
proto.sensetime.gateway.UserAddRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.sensetime.gateway.UserAddRequest.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string phone = 7;
 * @return {string}
 */
proto.sensetime.gateway.UserAddRequest.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.sensetime.gateway.UserAddRequest.prototype.setPhone = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string extra_info = 8;
 * @return {string}
 */
proto.sensetime.gateway.UserAddRequest.prototype.getExtraInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.sensetime.gateway.UserAddRequest.prototype.setExtraInfo = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bool is_activated = 9;
 * @return {boolean}
 */
proto.sensetime.gateway.UserAddRequest.prototype.getIsActivated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/** @param {boolean} value */
proto.sensetime.gateway.UserAddRequest.prototype.setIsActivated = function(value) {
  jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool enable_all_device_tags = 10;
 * @return {boolean}
 */
proto.sensetime.gateway.UserAddRequest.prototype.getEnableAllDeviceTags = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/** @param {boolean} value */
proto.sensetime.gateway.UserAddRequest.prototype.setEnableAllDeviceTags = function(value) {
  jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * repeated string device_tags = 11;
 * @return {!Array<string>}
 */
proto.sensetime.gateway.UserAddRequest.prototype.getDeviceTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/** @param {!Array<string>} value */
proto.sensetime.gateway.UserAddRequest.prototype.setDeviceTagsList = function(value) {
  jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.sensetime.gateway.UserAddRequest.prototype.addDeviceTags = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.sensetime.gateway.UserAddRequest.prototype.clearDeviceTagsList = function() {
  this.setDeviceTagsList([]);
};


/**
 * optional bytes image_blob = 12;
 * @return {!(string|Uint8Array)}
 */
proto.sensetime.gateway.UserAddRequest.prototype.getImageBlob = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * optional bytes image_blob = 12;
 * This is a type-conversion wrapper around `getImageBlob()`
 * @return {string}
 */
proto.sensetime.gateway.UserAddRequest.prototype.getImageBlob_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getImageBlob()));
};


/**
 * optional bytes image_blob = 12;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getImageBlob()`
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.UserAddRequest.prototype.getImageBlob_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getImageBlob()));
};


/** @param {!(string|Uint8Array)} value */
proto.sensetime.gateway.UserAddRequest.prototype.setImageBlob = function(value) {
  jspb.Message.setProto3BytesField(this, 12, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.UserAddResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.UserAddResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.UserAddResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserAddResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.UserAddResponse}
 */
proto.sensetime.gateway.UserAddResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.UserAddResponse;
  return proto.sensetime.gateway.UserAddResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.UserAddResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.UserAddResponse}
 */
proto.sensetime.gateway.UserAddResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.UserAddResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.UserAddResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.UserAddResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserAddResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.UserDeleteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.UserDeleteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.UserDeleteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserDeleteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.UserDeleteRequest}
 */
proto.sensetime.gateway.UserDeleteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.UserDeleteRequest;
  return proto.sensetime.gateway.UserDeleteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.UserDeleteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.UserDeleteRequest}
 */
proto.sensetime.gateway.UserDeleteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.UserDeleteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.UserDeleteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.UserDeleteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserDeleteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string account = 1;
 * @return {string}
 */
proto.sensetime.gateway.UserDeleteRequest.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.sensetime.gateway.UserDeleteRequest.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.UserDeleteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.UserDeleteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.UserDeleteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserDeleteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.UserDeleteResponse}
 */
proto.sensetime.gateway.UserDeleteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.UserDeleteResponse;
  return proto.sensetime.gateway.UserDeleteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.UserDeleteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.UserDeleteResponse}
 */
proto.sensetime.gateway.UserDeleteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.UserDeleteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.UserDeleteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.UserDeleteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserDeleteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensetime.gateway.UserUpdateRequest.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.UserUpdateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.UserUpdateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.UserUpdateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserUpdateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    role: jspb.Message.getFieldWithDefault(msg, 2, 0),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 4, ""),
    extraInfo: jspb.Message.getFieldWithDefault(msg, 5, ""),
    name: jspb.Message.getFieldWithDefault(msg, 6, ""),
    enableAllDeviceTags: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    deviceTagsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.UserUpdateRequest}
 */
proto.sensetime.gateway.UserUpdateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.UserUpdateRequest;
  return proto.sensetime.gateway.UserUpdateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.UserUpdateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.UserUpdateRequest}
 */
proto.sensetime.gateway.UserUpdateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {!proto.sensetime.gateway.Role} */ (reader.readEnum());
      msg.setRole(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setExtraInfo(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableAllDeviceTags(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addDeviceTags(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.UserUpdateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.UserUpdateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.UserUpdateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserUpdateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRole();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getExtraInfo();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getEnableAllDeviceTags();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getDeviceTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
};


/**
 * optional string account = 1;
 * @return {string}
 */
proto.sensetime.gateway.UserUpdateRequest.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.sensetime.gateway.UserUpdateRequest.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Role role = 2;
 * @return {!proto.sensetime.gateway.Role}
 */
proto.sensetime.gateway.UserUpdateRequest.prototype.getRole = function() {
  return /** @type {!proto.sensetime.gateway.Role} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.sensetime.gateway.Role} value */
proto.sensetime.gateway.UserUpdateRequest.prototype.setRole = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.sensetime.gateway.UserUpdateRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.sensetime.gateway.UserUpdateRequest.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string phone = 4;
 * @return {string}
 */
proto.sensetime.gateway.UserUpdateRequest.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.sensetime.gateway.UserUpdateRequest.prototype.setPhone = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string extra_info = 5;
 * @return {string}
 */
proto.sensetime.gateway.UserUpdateRequest.prototype.getExtraInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.sensetime.gateway.UserUpdateRequest.prototype.setExtraInfo = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.sensetime.gateway.UserUpdateRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.sensetime.gateway.UserUpdateRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool enable_all_device_tags = 7;
 * @return {boolean}
 */
proto.sensetime.gateway.UserUpdateRequest.prototype.getEnableAllDeviceTags = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.sensetime.gateway.UserUpdateRequest.prototype.setEnableAllDeviceTags = function(value) {
  jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * repeated string device_tags = 8;
 * @return {!Array<string>}
 */
proto.sensetime.gateway.UserUpdateRequest.prototype.getDeviceTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/** @param {!Array<string>} value */
proto.sensetime.gateway.UserUpdateRequest.prototype.setDeviceTagsList = function(value) {
  jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.sensetime.gateway.UserUpdateRequest.prototype.addDeviceTags = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.sensetime.gateway.UserUpdateRequest.prototype.clearDeviceTagsList = function() {
  this.setDeviceTagsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.UserUpdateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.UserUpdateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.UserUpdateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserUpdateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.UserUpdateResponse}
 */
proto.sensetime.gateway.UserUpdateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.UserUpdateResponse;
  return proto.sensetime.gateway.UserUpdateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.UserUpdateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.UserUpdateResponse}
 */
proto.sensetime.gateway.UserUpdateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.UserUpdateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.UserUpdateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.UserUpdateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserUpdateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.UserUpdateImageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.UserUpdateImageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.UserUpdateImageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserUpdateImageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    imageBlob: msg.getImageBlob_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.UserUpdateImageRequest}
 */
proto.sensetime.gateway.UserUpdateImageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.UserUpdateImageRequest;
  return proto.sensetime.gateway.UserUpdateImageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.UserUpdateImageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.UserUpdateImageRequest}
 */
proto.sensetime.gateway.UserUpdateImageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setImageBlob(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.UserUpdateImageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.UserUpdateImageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.UserUpdateImageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserUpdateImageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getImageBlob_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string account = 1;
 * @return {string}
 */
proto.sensetime.gateway.UserUpdateImageRequest.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.sensetime.gateway.UserUpdateImageRequest.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes image_blob = 2;
 * @return {!(string|Uint8Array)}
 */
proto.sensetime.gateway.UserUpdateImageRequest.prototype.getImageBlob = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes image_blob = 2;
 * This is a type-conversion wrapper around `getImageBlob()`
 * @return {string}
 */
proto.sensetime.gateway.UserUpdateImageRequest.prototype.getImageBlob_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getImageBlob()));
};


/**
 * optional bytes image_blob = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getImageBlob()`
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.UserUpdateImageRequest.prototype.getImageBlob_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getImageBlob()));
};


/** @param {!(string|Uint8Array)} value */
proto.sensetime.gateway.UserUpdateImageRequest.prototype.setImageBlob = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.UserUpdateImageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.UserUpdateImageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.UserUpdateImageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserUpdateImageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.UserUpdateImageResponse}
 */
proto.sensetime.gateway.UserUpdateImageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.UserUpdateImageResponse;
  return proto.sensetime.gateway.UserUpdateImageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.UserUpdateImageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.UserUpdateImageResponse}
 */
proto.sensetime.gateway.UserUpdateImageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.UserUpdateImageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.UserUpdateImageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.UserUpdateImageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserUpdateImageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.UserUpdatePasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.UserUpdatePasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.UserUpdatePasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserUpdatePasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, ""),
    originPassword: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.UserUpdatePasswordRequest}
 */
proto.sensetime.gateway.UserUpdatePasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.UserUpdatePasswordRequest;
  return proto.sensetime.gateway.UserUpdatePasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.UserUpdatePasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.UserUpdatePasswordRequest}
 */
proto.sensetime.gateway.UserUpdatePasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.UserUpdatePasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.UserUpdatePasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.UserUpdatePasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserUpdatePasswordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOriginPassword();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string account = 1;
 * @return {string}
 */
proto.sensetime.gateway.UserUpdatePasswordRequest.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.sensetime.gateway.UserUpdatePasswordRequest.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.sensetime.gateway.UserUpdatePasswordRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.sensetime.gateway.UserUpdatePasswordRequest.prototype.setPassword = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string origin_password = 3;
 * @return {string}
 */
proto.sensetime.gateway.UserUpdatePasswordRequest.prototype.getOriginPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.sensetime.gateway.UserUpdatePasswordRequest.prototype.setOriginPassword = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.UserUpdatePasswordResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.UserUpdatePasswordResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.UserUpdatePasswordResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserUpdatePasswordResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.UserUpdatePasswordResponse}
 */
proto.sensetime.gateway.UserUpdatePasswordResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.UserUpdatePasswordResponse;
  return proto.sensetime.gateway.UserUpdatePasswordResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.UserUpdatePasswordResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.UserUpdatePasswordResponse}
 */
proto.sensetime.gateway.UserUpdatePasswordResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.UserUpdatePasswordResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.UserUpdatePasswordResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.UserUpdatePasswordResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserUpdatePasswordResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.UserListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.UserListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.UserListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageLimit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageOffset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    account: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.UserListRequest}
 */
proto.sensetime.gateway.UserListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.UserListRequest;
  return proto.sensetime.gateway.UserListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.UserListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.UserListRequest}
 */
proto.sensetime.gateway.UserListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageLimit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageOffset(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.UserListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.UserListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.UserListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageLimit();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageOffset();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 page_limit = 1;
 * @return {number}
 */
proto.sensetime.gateway.UserListRequest.prototype.getPageLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.sensetime.gateway.UserListRequest.prototype.setPageLimit = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 page_offset = 2;
 * @return {number}
 */
proto.sensetime.gateway.UserListRequest.prototype.getPageOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.sensetime.gateway.UserListRequest.prototype.setPageOffset = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string account = 3;
 * @return {string}
 */
proto.sensetime.gateway.UserListRequest.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.sensetime.gateway.UserListRequest.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensetime.gateway.UserListResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.UserListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.UserListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.UserListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userInfosList: jspb.Message.toObjectList(msg.getUserInfosList(),
    proto.sensetime.gateway.UserInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.UserListResponse}
 */
proto.sensetime.gateway.UserListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.UserListResponse;
  return proto.sensetime.gateway.UserListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.UserListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.UserListResponse}
 */
proto.sensetime.gateway.UserListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
      break;
    case 2:
      var value = new proto.sensetime.gateway.UserInfo;
      reader.readMessage(value,proto.sensetime.gateway.UserInfo.deserializeBinaryFromReader);
      msg.addUserInfos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.UserListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.UserListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.UserListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUserInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sensetime.gateway.UserInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 total = 1;
 * @return {number}
 */
proto.sensetime.gateway.UserListResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.sensetime.gateway.UserListResponse.prototype.setTotal = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated UserInfo user_infos = 2;
 * @return {!Array<!proto.sensetime.gateway.UserInfo>}
 */
proto.sensetime.gateway.UserListResponse.prototype.getUserInfosList = function() {
  return /** @type{!Array<!proto.sensetime.gateway.UserInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sensetime.gateway.UserInfo, 2));
};


/** @param {!Array<!proto.sensetime.gateway.UserInfo>} value */
proto.sensetime.gateway.UserListResponse.prototype.setUserInfosList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sensetime.gateway.UserInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sensetime.gateway.UserInfo}
 */
proto.sensetime.gateway.UserListResponse.prototype.addUserInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sensetime.gateway.UserInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.sensetime.gateway.UserListResponse.prototype.clearUserInfosList = function() {
  this.setUserInfosList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.UserGetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.UserGetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.UserGetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserGetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.UserGetRequest}
 */
proto.sensetime.gateway.UserGetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.UserGetRequest;
  return proto.sensetime.gateway.UserGetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.UserGetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.UserGetRequest}
 */
proto.sensetime.gateway.UserGetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.UserGetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.UserGetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.UserGetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserGetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string account = 1;
 * @return {string}
 */
proto.sensetime.gateway.UserGetRequest.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.sensetime.gateway.UserGetRequest.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.UserGetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.UserGetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.UserGetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserGetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    userInfo: (f = msg.getUserInfo()) && proto.sensetime.gateway.UserInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.UserGetResponse}
 */
proto.sensetime.gateway.UserGetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.UserGetResponse;
  return proto.sensetime.gateway.UserGetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.UserGetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.UserGetResponse}
 */
proto.sensetime.gateway.UserGetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensetime.gateway.UserInfo;
      reader.readMessage(value,proto.sensetime.gateway.UserInfo.deserializeBinaryFromReader);
      msg.setUserInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.UserGetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.UserGetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.UserGetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UserGetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sensetime.gateway.UserInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserInfo user_info = 1;
 * @return {?proto.sensetime.gateway.UserInfo}
 */
proto.sensetime.gateway.UserGetResponse.prototype.getUserInfo = function() {
  return /** @type{?proto.sensetime.gateway.UserInfo} */ (
    jspb.Message.getWrapperField(this, proto.sensetime.gateway.UserInfo, 1));
};


/** @param {?proto.sensetime.gateway.UserInfo|undefined} value */
proto.sensetime.gateway.UserGetResponse.prototype.setUserInfo = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.sensetime.gateway.UserGetResponse.prototype.clearUserInfo = function() {
  this.setUserInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensetime.gateway.UserGetResponse.prototype.hasUserInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.LogListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.LogListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.LogListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.LogListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    pageLimit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageOffset: jspb.Message.getFieldWithDefault(msg, 4, 0),
    account: jspb.Message.getFieldWithDefault(msg, 5, ""),
    optionType: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.LogListRequest}
 */
proto.sensetime.gateway.LogListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.LogListRequest;
  return proto.sensetime.gateway.LogListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.LogListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.LogListRequest}
 */
proto.sensetime.gateway.LogListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageLimit(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageOffset(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 6:
      var value = /** @type {!proto.sensetime.gateway.OperationType} */ (reader.readEnum());
      msg.setOptionType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.LogListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.LogListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.LogListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.LogListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPageLimit();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageOffset();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getOptionType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp start_time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sensetime.gateway.LogListRequest.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.sensetime.gateway.LogListRequest.prototype.setStartTime = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.sensetime.gateway.LogListRequest.prototype.clearStartTime = function() {
  this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensetime.gateway.LogListRequest.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sensetime.gateway.LogListRequest.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.sensetime.gateway.LogListRequest.prototype.setEndTime = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.sensetime.gateway.LogListRequest.prototype.clearEndTime = function() {
  this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensetime.gateway.LogListRequest.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 page_limit = 3;
 * @return {number}
 */
proto.sensetime.gateway.LogListRequest.prototype.getPageLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.sensetime.gateway.LogListRequest.prototype.setPageLimit = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 page_offset = 4;
 * @return {number}
 */
proto.sensetime.gateway.LogListRequest.prototype.getPageOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.sensetime.gateway.LogListRequest.prototype.setPageOffset = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string account = 5;
 * @return {string}
 */
proto.sensetime.gateway.LogListRequest.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.sensetime.gateway.LogListRequest.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional OperationType option_type = 6;
 * @return {!proto.sensetime.gateway.OperationType}
 */
proto.sensetime.gateway.LogListRequest.prototype.getOptionType = function() {
  return /** @type {!proto.sensetime.gateway.OperationType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.sensetime.gateway.OperationType} value */
proto.sensetime.gateway.LogListRequest.prototype.setOptionType = function(value) {
  jspb.Message.setProto3EnumField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensetime.gateway.LogListResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.LogListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.LogListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.LogListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.LogListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    logInfoList: jspb.Message.toObjectList(msg.getLogInfoList(),
    proto.sensetime.gateway.LogListResponse.LogInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.LogListResponse}
 */
proto.sensetime.gateway.LogListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.LogListResponse;
  return proto.sensetime.gateway.LogListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.LogListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.LogListResponse}
 */
proto.sensetime.gateway.LogListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
      break;
    case 2:
      var value = new proto.sensetime.gateway.LogListResponse.LogInfo;
      reader.readMessage(value,proto.sensetime.gateway.LogListResponse.LogInfo.deserializeBinaryFromReader);
      msg.addLogInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.LogListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.LogListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.LogListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.LogListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getLogInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sensetime.gateway.LogListResponse.LogInfo.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.LogListResponse.LogInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.LogListResponse.LogInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.LogListResponse.LogInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.LogListResponse.LogInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdTime: (f = msg.getCreatedTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    optionType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    extraInfo: jspb.Message.getFieldWithDefault(msg, 4, ""),
    imageId: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.LogListResponse.LogInfo}
 */
proto.sensetime.gateway.LogListResponse.LogInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.LogListResponse.LogInfo;
  return proto.sensetime.gateway.LogListResponse.LogInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.LogListResponse.LogInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.LogListResponse.LogInfo}
 */
proto.sensetime.gateway.LogListResponse.LogInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedTime(value);
      break;
    case 3:
      var value = /** @type {!proto.sensetime.gateway.OperationType} */ (reader.readEnum());
      msg.setOptionType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setExtraInfo(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.LogListResponse.LogInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.LogListResponse.LogInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.LogListResponse.LogInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.LogListResponse.LogInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreatedTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getOptionType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getExtraInfo();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getImageId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string account = 1;
 * @return {string}
 */
proto.sensetime.gateway.LogListResponse.LogInfo.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.sensetime.gateway.LogListResponse.LogInfo.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp created_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sensetime.gateway.LogListResponse.LogInfo.prototype.getCreatedTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.sensetime.gateway.LogListResponse.LogInfo.prototype.setCreatedTime = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.sensetime.gateway.LogListResponse.LogInfo.prototype.clearCreatedTime = function() {
  this.setCreatedTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensetime.gateway.LogListResponse.LogInfo.prototype.hasCreatedTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional OperationType option_type = 3;
 * @return {!proto.sensetime.gateway.OperationType}
 */
proto.sensetime.gateway.LogListResponse.LogInfo.prototype.getOptionType = function() {
  return /** @type {!proto.sensetime.gateway.OperationType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.sensetime.gateway.OperationType} value */
proto.sensetime.gateway.LogListResponse.LogInfo.prototype.setOptionType = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string extra_info = 4;
 * @return {string}
 */
proto.sensetime.gateway.LogListResponse.LogInfo.prototype.getExtraInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.sensetime.gateway.LogListResponse.LogInfo.prototype.setExtraInfo = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string image_id = 5;
 * @return {string}
 */
proto.sensetime.gateway.LogListResponse.LogInfo.prototype.getImageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.sensetime.gateway.LogListResponse.LogInfo.prototype.setImageId = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 total = 1;
 * @return {number}
 */
proto.sensetime.gateway.LogListResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.sensetime.gateway.LogListResponse.prototype.setTotal = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated LogInfo log_info = 2;
 * @return {!Array<!proto.sensetime.gateway.LogListResponse.LogInfo>}
 */
proto.sensetime.gateway.LogListResponse.prototype.getLogInfoList = function() {
  return /** @type{!Array<!proto.sensetime.gateway.LogListResponse.LogInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sensetime.gateway.LogListResponse.LogInfo, 2));
};


/** @param {!Array<!proto.sensetime.gateway.LogListResponse.LogInfo>} value */
proto.sensetime.gateway.LogListResponse.prototype.setLogInfoList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sensetime.gateway.LogListResponse.LogInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sensetime.gateway.LogListResponse.LogInfo}
 */
proto.sensetime.gateway.LogListResponse.prototype.addLogInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sensetime.gateway.LogListResponse.LogInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.sensetime.gateway.LogListResponse.prototype.clearLogInfoList = function() {
  this.setLogInfoList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.DeviceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.DeviceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.DeviceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.DeviceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deviceName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    deviceUnitCode: jspb.Message.getFieldWithDefault(msg, 3, ""),
    deviceUnitName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    deviceAddrCode: jspb.Message.getFieldWithDefault(msg, 5, ""),
    deviceAddrDetail: jspb.Message.getFieldWithDefault(msg, 6, ""),
    deviceCoordinateX: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    deviceCoordinateY: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    deviceTag: jspb.Message.getFieldWithDefault(msg, 9, ""),
    deviceExtraInfo: jspb.Message.getFieldWithDefault(msg, 10, ""),
    createdTime: (f = msg.getCreatedTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedTime: (f = msg.getUpdatedTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateType: jspb.Message.getFieldWithDefault(msg, 13, 0),
    requestId: jspb.Message.getFieldWithDefault(msg, 14, ""),
    uploadStatus: jspb.Message.getFieldWithDefault(msg, 15, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.DeviceInfo}
 */
proto.sensetime.gateway.DeviceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.DeviceInfo;
  return proto.sensetime.gateway.DeviceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.DeviceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.DeviceInfo}
 */
proto.sensetime.gateway.DeviceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceUnitCode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceUnitName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceAddrCode(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceAddrDetail(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDeviceCoordinateX(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDeviceCoordinateY(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceTag(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceExtraInfo(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedTime(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedTime(value);
      break;
    case 13:
      var value = /** @type {!proto.sensetime.gateway.DeviceUpdateType} */ (reader.readEnum());
      msg.setUpdateType(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setUploadStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.DeviceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.DeviceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.DeviceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.DeviceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeviceName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDeviceUnitCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDeviceUnitName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDeviceAddrCode();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDeviceAddrDetail();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDeviceCoordinateX();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getDeviceCoordinateY();
  if (f !== 0.0) {
    writer.writeFloat(
      8,
      f
    );
  }
  f = message.getDeviceTag();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getDeviceExtraInfo();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCreatedTime();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedTime();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateType();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getUploadStatus();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
};


/**
 * optional string device_id = 1;
 * @return {string}
 */
proto.sensetime.gateway.DeviceInfo.prototype.getDeviceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceInfo.prototype.setDeviceId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string device_name = 2;
 * @return {string}
 */
proto.sensetime.gateway.DeviceInfo.prototype.getDeviceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceInfo.prototype.setDeviceName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string device_unit_code = 3;
 * @return {string}
 */
proto.sensetime.gateway.DeviceInfo.prototype.getDeviceUnitCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceInfo.prototype.setDeviceUnitCode = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string device_unit_name = 4;
 * @return {string}
 */
proto.sensetime.gateway.DeviceInfo.prototype.getDeviceUnitName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceInfo.prototype.setDeviceUnitName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string device_addr_code = 5;
 * @return {string}
 */
proto.sensetime.gateway.DeviceInfo.prototype.getDeviceAddrCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceInfo.prototype.setDeviceAddrCode = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string device_addr_detail = 6;
 * @return {string}
 */
proto.sensetime.gateway.DeviceInfo.prototype.getDeviceAddrDetail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceInfo.prototype.setDeviceAddrDetail = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional float device_coordinate_x = 7;
 * @return {number}
 */
proto.sensetime.gateway.DeviceInfo.prototype.getDeviceCoordinateX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/** @param {number} value */
proto.sensetime.gateway.DeviceInfo.prototype.setDeviceCoordinateX = function(value) {
  jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional float device_coordinate_y = 8;
 * @return {number}
 */
proto.sensetime.gateway.DeviceInfo.prototype.getDeviceCoordinateY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/** @param {number} value */
proto.sensetime.gateway.DeviceInfo.prototype.setDeviceCoordinateY = function(value) {
  jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional string device_tag = 9;
 * @return {string}
 */
proto.sensetime.gateway.DeviceInfo.prototype.getDeviceTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceInfo.prototype.setDeviceTag = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string device_extra_info = 10;
 * @return {string}
 */
proto.sensetime.gateway.DeviceInfo.prototype.getDeviceExtraInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceInfo.prototype.setDeviceExtraInfo = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional google.protobuf.Timestamp created_time = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sensetime.gateway.DeviceInfo.prototype.getCreatedTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.sensetime.gateway.DeviceInfo.prototype.setCreatedTime = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.sensetime.gateway.DeviceInfo.prototype.clearCreatedTime = function() {
  this.setCreatedTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensetime.gateway.DeviceInfo.prototype.hasCreatedTime = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Timestamp updated_time = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sensetime.gateway.DeviceInfo.prototype.getUpdatedTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.sensetime.gateway.DeviceInfo.prototype.setUpdatedTime = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.sensetime.gateway.DeviceInfo.prototype.clearUpdatedTime = function() {
  this.setUpdatedTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensetime.gateway.DeviceInfo.prototype.hasUpdatedTime = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional DeviceUpdateType update_type = 13;
 * @return {!proto.sensetime.gateway.DeviceUpdateType}
 */
proto.sensetime.gateway.DeviceInfo.prototype.getUpdateType = function() {
  return /** @type {!proto.sensetime.gateway.DeviceUpdateType} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {!proto.sensetime.gateway.DeviceUpdateType} value */
proto.sensetime.gateway.DeviceInfo.prototype.setUpdateType = function(value) {
  jspb.Message.setProto3EnumField(this, 13, value);
};


/**
 * optional string request_id = 14;
 * @return {string}
 */
proto.sensetime.gateway.DeviceInfo.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceInfo.prototype.setRequestId = function(value) {
  jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string upload_status = 15;
 * @return {string}
 */
proto.sensetime.gateway.DeviceInfo.prototype.getUploadStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceInfo.prototype.setUploadStatus = function(value) {
  jspb.Message.setProto3StringField(this, 15, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.DeviceAddRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.DeviceAddRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.DeviceAddRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.DeviceAddRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deviceName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    deviceUnitCode: jspb.Message.getFieldWithDefault(msg, 3, ""),
    deviceUnitName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    deviceAddrCode: jspb.Message.getFieldWithDefault(msg, 5, ""),
    deviceAddrDetail: jspb.Message.getFieldWithDefault(msg, 6, ""),
    deviceCoordinateX: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    deviceCoordinateY: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    deviceTag: jspb.Message.getFieldWithDefault(msg, 9, ""),
    deviceExtraInfo: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.DeviceAddRequest}
 */
proto.sensetime.gateway.DeviceAddRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.DeviceAddRequest;
  return proto.sensetime.gateway.DeviceAddRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.DeviceAddRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.DeviceAddRequest}
 */
proto.sensetime.gateway.DeviceAddRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceUnitCode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceUnitName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceAddrCode(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceAddrDetail(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDeviceCoordinateX(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDeviceCoordinateY(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceTag(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceExtraInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.DeviceAddRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.DeviceAddRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.DeviceAddRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.DeviceAddRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeviceName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDeviceUnitCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDeviceUnitName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDeviceAddrCode();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDeviceAddrDetail();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDeviceCoordinateX();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getDeviceCoordinateY();
  if (f !== 0.0) {
    writer.writeFloat(
      8,
      f
    );
  }
  f = message.getDeviceTag();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getDeviceExtraInfo();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string device_id = 1;
 * @return {string}
 */
proto.sensetime.gateway.DeviceAddRequest.prototype.getDeviceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceAddRequest.prototype.setDeviceId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string device_name = 2;
 * @return {string}
 */
proto.sensetime.gateway.DeviceAddRequest.prototype.getDeviceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceAddRequest.prototype.setDeviceName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string device_unit_code = 3;
 * @return {string}
 */
proto.sensetime.gateway.DeviceAddRequest.prototype.getDeviceUnitCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceAddRequest.prototype.setDeviceUnitCode = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string device_unit_name = 4;
 * @return {string}
 */
proto.sensetime.gateway.DeviceAddRequest.prototype.getDeviceUnitName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceAddRequest.prototype.setDeviceUnitName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string device_addr_code = 5;
 * @return {string}
 */
proto.sensetime.gateway.DeviceAddRequest.prototype.getDeviceAddrCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceAddRequest.prototype.setDeviceAddrCode = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string device_addr_detail = 6;
 * @return {string}
 */
proto.sensetime.gateway.DeviceAddRequest.prototype.getDeviceAddrDetail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceAddRequest.prototype.setDeviceAddrDetail = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional float device_coordinate_x = 7;
 * @return {number}
 */
proto.sensetime.gateway.DeviceAddRequest.prototype.getDeviceCoordinateX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/** @param {number} value */
proto.sensetime.gateway.DeviceAddRequest.prototype.setDeviceCoordinateX = function(value) {
  jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional float device_coordinate_y = 8;
 * @return {number}
 */
proto.sensetime.gateway.DeviceAddRequest.prototype.getDeviceCoordinateY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/** @param {number} value */
proto.sensetime.gateway.DeviceAddRequest.prototype.setDeviceCoordinateY = function(value) {
  jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional string device_tag = 9;
 * @return {string}
 */
proto.sensetime.gateway.DeviceAddRequest.prototype.getDeviceTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceAddRequest.prototype.setDeviceTag = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string device_extra_info = 10;
 * @return {string}
 */
proto.sensetime.gateway.DeviceAddRequest.prototype.getDeviceExtraInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceAddRequest.prototype.setDeviceExtraInfo = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.DeviceAddResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.DeviceAddResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.DeviceAddResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.DeviceAddResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.DeviceAddResponse}
 */
proto.sensetime.gateway.DeviceAddResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.DeviceAddResponse;
  return proto.sensetime.gateway.DeviceAddResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.DeviceAddResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.DeviceAddResponse}
 */
proto.sensetime.gateway.DeviceAddResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.DeviceAddResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.DeviceAddResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.DeviceAddResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.DeviceAddResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string device_id = 1;
 * @return {string}
 */
proto.sensetime.gateway.DeviceAddResponse.prototype.getDeviceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceAddResponse.prototype.setDeviceId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.DeviceDeleteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.DeviceDeleteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.DeviceDeleteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.DeviceDeleteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.DeviceDeleteRequest}
 */
proto.sensetime.gateway.DeviceDeleteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.DeviceDeleteRequest;
  return proto.sensetime.gateway.DeviceDeleteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.DeviceDeleteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.DeviceDeleteRequest}
 */
proto.sensetime.gateway.DeviceDeleteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.DeviceDeleteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.DeviceDeleteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.DeviceDeleteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.DeviceDeleteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string device_id = 1;
 * @return {string}
 */
proto.sensetime.gateway.DeviceDeleteRequest.prototype.getDeviceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceDeleteRequest.prototype.setDeviceId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.DeviceDeleteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.DeviceDeleteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.DeviceDeleteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.DeviceDeleteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.DeviceDeleteResponse}
 */
proto.sensetime.gateway.DeviceDeleteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.DeviceDeleteResponse;
  return proto.sensetime.gateway.DeviceDeleteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.DeviceDeleteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.DeviceDeleteResponse}
 */
proto.sensetime.gateway.DeviceDeleteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.DeviceDeleteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.DeviceDeleteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.DeviceDeleteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.DeviceDeleteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.DeviceUpdateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.DeviceUpdateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.DeviceUpdateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.DeviceUpdateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deviceName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    deviceUnitCode: jspb.Message.getFieldWithDefault(msg, 3, ""),
    deviceUnitName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    deviceAddrCode: jspb.Message.getFieldWithDefault(msg, 5, ""),
    deviceAddrDetail: jspb.Message.getFieldWithDefault(msg, 6, ""),
    deviceCoordinateX: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    deviceCoordinateY: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    deviceTag: jspb.Message.getFieldWithDefault(msg, 9, ""),
    deviceExtraInfo: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.DeviceUpdateRequest}
 */
proto.sensetime.gateway.DeviceUpdateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.DeviceUpdateRequest;
  return proto.sensetime.gateway.DeviceUpdateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.DeviceUpdateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.DeviceUpdateRequest}
 */
proto.sensetime.gateway.DeviceUpdateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceUnitCode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceUnitName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceAddrCode(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceAddrDetail(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDeviceCoordinateX(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDeviceCoordinateY(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceTag(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceExtraInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.DeviceUpdateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.DeviceUpdateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.DeviceUpdateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.DeviceUpdateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeviceName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDeviceUnitCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDeviceUnitName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDeviceAddrCode();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDeviceAddrDetail();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDeviceCoordinateX();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getDeviceCoordinateY();
  if (f !== 0.0) {
    writer.writeFloat(
      8,
      f
    );
  }
  f = message.getDeviceTag();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getDeviceExtraInfo();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string device_id = 1;
 * @return {string}
 */
proto.sensetime.gateway.DeviceUpdateRequest.prototype.getDeviceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceUpdateRequest.prototype.setDeviceId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string device_name = 2;
 * @return {string}
 */
proto.sensetime.gateway.DeviceUpdateRequest.prototype.getDeviceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceUpdateRequest.prototype.setDeviceName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string device_unit_code = 3;
 * @return {string}
 */
proto.sensetime.gateway.DeviceUpdateRequest.prototype.getDeviceUnitCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceUpdateRequest.prototype.setDeviceUnitCode = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string device_unit_name = 4;
 * @return {string}
 */
proto.sensetime.gateway.DeviceUpdateRequest.prototype.getDeviceUnitName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceUpdateRequest.prototype.setDeviceUnitName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string device_addr_code = 5;
 * @return {string}
 */
proto.sensetime.gateway.DeviceUpdateRequest.prototype.getDeviceAddrCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceUpdateRequest.prototype.setDeviceAddrCode = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string device_addr_detail = 6;
 * @return {string}
 */
proto.sensetime.gateway.DeviceUpdateRequest.prototype.getDeviceAddrDetail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceUpdateRequest.prototype.setDeviceAddrDetail = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional float device_coordinate_x = 7;
 * @return {number}
 */
proto.sensetime.gateway.DeviceUpdateRequest.prototype.getDeviceCoordinateX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/** @param {number} value */
proto.sensetime.gateway.DeviceUpdateRequest.prototype.setDeviceCoordinateX = function(value) {
  jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional float device_coordinate_y = 8;
 * @return {number}
 */
proto.sensetime.gateway.DeviceUpdateRequest.prototype.getDeviceCoordinateY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/** @param {number} value */
proto.sensetime.gateway.DeviceUpdateRequest.prototype.setDeviceCoordinateY = function(value) {
  jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional string device_tag = 9;
 * @return {string}
 */
proto.sensetime.gateway.DeviceUpdateRequest.prototype.getDeviceTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceUpdateRequest.prototype.setDeviceTag = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string device_extra_info = 10;
 * @return {string}
 */
proto.sensetime.gateway.DeviceUpdateRequest.prototype.getDeviceExtraInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceUpdateRequest.prototype.setDeviceExtraInfo = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.DeviceUpdateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.DeviceUpdateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.DeviceUpdateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.DeviceUpdateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.DeviceUpdateResponse}
 */
proto.sensetime.gateway.DeviceUpdateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.DeviceUpdateResponse;
  return proto.sensetime.gateway.DeviceUpdateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.DeviceUpdateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.DeviceUpdateResponse}
 */
proto.sensetime.gateway.DeviceUpdateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.DeviceUpdateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.DeviceUpdateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.DeviceUpdateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.DeviceUpdateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.DeviceListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.DeviceListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.DeviceListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.DeviceListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageLimit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageOffset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    searchKeyWord: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.DeviceListRequest}
 */
proto.sensetime.gateway.DeviceListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.DeviceListRequest;
  return proto.sensetime.gateway.DeviceListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.DeviceListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.DeviceListRequest}
 */
proto.sensetime.gateway.DeviceListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageLimit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageOffset(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearchKeyWord(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.DeviceListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.DeviceListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.DeviceListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.DeviceListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageLimit();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageOffset();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSearchKeyWord();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 page_limit = 1;
 * @return {number}
 */
proto.sensetime.gateway.DeviceListRequest.prototype.getPageLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.sensetime.gateway.DeviceListRequest.prototype.setPageLimit = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 page_offset = 2;
 * @return {number}
 */
proto.sensetime.gateway.DeviceListRequest.prototype.getPageOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.sensetime.gateway.DeviceListRequest.prototype.setPageOffset = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string search_key_word = 3;
 * @return {string}
 */
proto.sensetime.gateway.DeviceListRequest.prototype.getSearchKeyWord = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceListRequest.prototype.setSearchKeyWord = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensetime.gateway.DeviceListResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.DeviceListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.DeviceListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.DeviceListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.DeviceListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    deviceInfosList: jspb.Message.toObjectList(msg.getDeviceInfosList(),
    proto.sensetime.gateway.DeviceInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.DeviceListResponse}
 */
proto.sensetime.gateway.DeviceListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.DeviceListResponse;
  return proto.sensetime.gateway.DeviceListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.DeviceListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.DeviceListResponse}
 */
proto.sensetime.gateway.DeviceListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
      break;
    case 2:
      var value = new proto.sensetime.gateway.DeviceInfo;
      reader.readMessage(value,proto.sensetime.gateway.DeviceInfo.deserializeBinaryFromReader);
      msg.addDeviceInfos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.DeviceListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.DeviceListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.DeviceListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.DeviceListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getDeviceInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sensetime.gateway.DeviceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 total = 1;
 * @return {number}
 */
proto.sensetime.gateway.DeviceListResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.sensetime.gateway.DeviceListResponse.prototype.setTotal = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated DeviceInfo device_infos = 2;
 * @return {!Array<!proto.sensetime.gateway.DeviceInfo>}
 */
proto.sensetime.gateway.DeviceListResponse.prototype.getDeviceInfosList = function() {
  return /** @type{!Array<!proto.sensetime.gateway.DeviceInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sensetime.gateway.DeviceInfo, 2));
};


/** @param {!Array<!proto.sensetime.gateway.DeviceInfo>} value */
proto.sensetime.gateway.DeviceListResponse.prototype.setDeviceInfosList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sensetime.gateway.DeviceInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sensetime.gateway.DeviceInfo}
 */
proto.sensetime.gateway.DeviceListResponse.prototype.addDeviceInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sensetime.gateway.DeviceInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.sensetime.gateway.DeviceListResponse.prototype.clearDeviceInfosList = function() {
  this.setDeviceInfosList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.DeviceGetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.DeviceGetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.DeviceGetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.DeviceGetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.DeviceGetRequest}
 */
proto.sensetime.gateway.DeviceGetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.DeviceGetRequest;
  return proto.sensetime.gateway.DeviceGetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.DeviceGetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.DeviceGetRequest}
 */
proto.sensetime.gateway.DeviceGetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.DeviceGetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.DeviceGetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.DeviceGetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.DeviceGetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string device_id = 1;
 * @return {string}
 */
proto.sensetime.gateway.DeviceGetRequest.prototype.getDeviceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.sensetime.gateway.DeviceGetRequest.prototype.setDeviceId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.DeviceGetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.DeviceGetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.DeviceGetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.DeviceGetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceInfo: (f = msg.getDeviceInfo()) && proto.sensetime.gateway.DeviceInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.DeviceGetResponse}
 */
proto.sensetime.gateway.DeviceGetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.DeviceGetResponse;
  return proto.sensetime.gateway.DeviceGetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.DeviceGetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.DeviceGetResponse}
 */
proto.sensetime.gateway.DeviceGetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensetime.gateway.DeviceInfo;
      reader.readMessage(value,proto.sensetime.gateway.DeviceInfo.deserializeBinaryFromReader);
      msg.setDeviceInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.DeviceGetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.DeviceGetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.DeviceGetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.DeviceGetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sensetime.gateway.DeviceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional DeviceInfo device_info = 1;
 * @return {?proto.sensetime.gateway.DeviceInfo}
 */
proto.sensetime.gateway.DeviceGetResponse.prototype.getDeviceInfo = function() {
  return /** @type{?proto.sensetime.gateway.DeviceInfo} */ (
    jspb.Message.getWrapperField(this, proto.sensetime.gateway.DeviceInfo, 1));
};


/** @param {?proto.sensetime.gateway.DeviceInfo|undefined} value */
proto.sensetime.gateway.DeviceGetResponse.prototype.setDeviceInfo = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.sensetime.gateway.DeviceGetResponse.prototype.clearDeviceInfo = function() {
  this.setDeviceInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensetime.gateway.DeviceGetResponse.prototype.hasDeviceInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.VerifyTokenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.VerifyTokenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.VerifyTokenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.VerifyTokenRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.VerifyTokenRequest}
 */
proto.sensetime.gateway.VerifyTokenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.VerifyTokenRequest;
  return proto.sensetime.gateway.VerifyTokenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.VerifyTokenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.VerifyTokenRequest}
 */
proto.sensetime.gateway.VerifyTokenRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.VerifyTokenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.VerifyTokenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.VerifyTokenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.VerifyTokenRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.VerifyTokenResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.VerifyTokenResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.VerifyTokenResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.VerifyTokenResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    userInfo: (f = msg.getUserInfo()) && proto.sensetime.gateway.UserInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.VerifyTokenResponse}
 */
proto.sensetime.gateway.VerifyTokenResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.VerifyTokenResponse;
  return proto.sensetime.gateway.VerifyTokenResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.VerifyTokenResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.VerifyTokenResponse}
 */
proto.sensetime.gateway.VerifyTokenResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensetime.gateway.UserInfo;
      reader.readMessage(value,proto.sensetime.gateway.UserInfo.deserializeBinaryFromReader);
      msg.setUserInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.VerifyTokenResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.VerifyTokenResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.VerifyTokenResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.VerifyTokenResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sensetime.gateway.UserInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserInfo user_info = 1;
 * @return {?proto.sensetime.gateway.UserInfo}
 */
proto.sensetime.gateway.VerifyTokenResponse.prototype.getUserInfo = function() {
  return /** @type{?proto.sensetime.gateway.UserInfo} */ (
    jspb.Message.getWrapperField(this, proto.sensetime.gateway.UserInfo, 1));
};


/** @param {?proto.sensetime.gateway.UserInfo|undefined} value */
proto.sensetime.gateway.VerifyTokenResponse.prototype.setUserInfo = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.sensetime.gateway.VerifyTokenResponse.prototype.clearUserInfo = function() {
  this.setUserInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensetime.gateway.VerifyTokenResponse.prototype.hasUserInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.ReFreshTokenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.ReFreshTokenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.ReFreshTokenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.ReFreshTokenRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.ReFreshTokenRequest}
 */
proto.sensetime.gateway.ReFreshTokenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.ReFreshTokenRequest;
  return proto.sensetime.gateway.ReFreshTokenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.ReFreshTokenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.ReFreshTokenRequest}
 */
proto.sensetime.gateway.ReFreshTokenRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.ReFreshTokenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.ReFreshTokenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.ReFreshTokenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.ReFreshTokenRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.ReFreshTokenResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.ReFreshTokenResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.ReFreshTokenResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.ReFreshTokenResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.ReFreshTokenResponse}
 */
proto.sensetime.gateway.ReFreshTokenResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.ReFreshTokenResponse;
  return proto.sensetime.gateway.ReFreshTokenResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.ReFreshTokenResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.ReFreshTokenResponse}
 */
proto.sensetime.gateway.ReFreshTokenResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.ReFreshTokenResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.ReFreshTokenResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.ReFreshTokenResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.ReFreshTokenResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.sensetime.gateway.ReFreshTokenResponse.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.sensetime.gateway.ReFreshTokenResponse.prototype.setToken = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.TimeValue.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.TimeValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.TimeValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.TimeValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    date: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.TimeValue}
 */
proto.sensetime.gateway.TimeValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.TimeValue;
  return proto.sensetime.gateway.TimeValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.TimeValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.TimeValue}
 */
proto.sensetime.gateway.TimeValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.TimeValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.TimeValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.TimeValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.TimeValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional string date = 1;
 * @return {string}
 */
proto.sensetime.gateway.TimeValue.prototype.getDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.sensetime.gateway.TimeValue.prototype.setDate = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double value = 2;
 * @return {number}
 */
proto.sensetime.gateway.TimeValue.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.sensetime.gateway.TimeValue.prototype.setValue = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.TopItem.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.TopItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.TopItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.TopItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    count: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.TopItem}
 */
proto.sensetime.gateway.TopItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.TopItem;
  return proto.sensetime.gateway.TopItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.TopItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.TopItem}
 */
proto.sensetime.gateway.TopItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.TopItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.TopItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.TopItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.TopItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sensetime.gateway.TopItem.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.sensetime.gateway.TopItem.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 count = 2;
 * @return {number}
 */
proto.sensetime.gateway.TopItem.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.sensetime.gateway.TopItem.prototype.setCount = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.IndexBaseInfoGetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.IndexBaseInfoGetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.IndexBaseInfoGetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.IndexBaseInfoGetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.IndexBaseInfoGetRequest}
 */
proto.sensetime.gateway.IndexBaseInfoGetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.IndexBaseInfoGetRequest;
  return proto.sensetime.gateway.IndexBaseInfoGetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.IndexBaseInfoGetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.IndexBaseInfoGetRequest}
 */
proto.sensetime.gateway.IndexBaseInfoGetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.IndexBaseInfoGetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.IndexBaseInfoGetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.IndexBaseInfoGetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.IndexBaseInfoGetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.IndexBaseInfoGetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.IndexBaseInfoGetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.IndexBaseInfoGetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    alertCountTotal: jspb.Message.getFieldWithDefault(msg, 1, 0),
    livenessCompareCountTotal: jspb.Message.getFieldWithDefault(msg, 2, 0),
    captureCompareCountTotal: jspb.Message.getFieldWithDefault(msg, 3, 0),
    livenessVerifyCountTotal: jspb.Message.getFieldWithDefault(msg, 4, 0),
    captureVerifyCountTotal: jspb.Message.getFieldWithDefault(msg, 5, 0),
    alertCountToday: jspb.Message.getFieldWithDefault(msg, 6, 0),
    livenessCompareCountToday: jspb.Message.getFieldWithDefault(msg, 7, 0),
    captureCompareCountToday: jspb.Message.getFieldWithDefault(msg, 8, 0),
    livenessVerifyCountToday: jspb.Message.getFieldWithDefault(msg, 9, 0),
    captureVerifyCountToday: jspb.Message.getFieldWithDefault(msg, 10, 0),
    featureCountTotal: jspb.Message.getFieldWithDefault(msg, 11, 0),
    featureCountTotalRed: jspb.Message.getFieldWithDefault(msg, 12, 0),
    featureCountTotalOrange: jspb.Message.getFieldWithDefault(msg, 13, 0),
    featureCountTotalYellow: jspb.Message.getFieldWithDefault(msg, 14, 0),
    featureCountTotalGreen: jspb.Message.getFieldWithDefault(msg, 15, 0),
    featureCountLatestSync: jspb.Message.getFieldWithDefault(msg, 16, 0),
    deviceCountTotal: jspb.Message.getFieldWithDefault(msg, 17, 0),
    userCountTotal: jspb.Message.getFieldWithDefault(msg, 18, 0),
    status: jspb.Message.getFieldWithDefault(msg, 19, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.IndexBaseInfoGetResponse}
 */
proto.sensetime.gateway.IndexBaseInfoGetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.IndexBaseInfoGetResponse;
  return proto.sensetime.gateway.IndexBaseInfoGetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.IndexBaseInfoGetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.IndexBaseInfoGetResponse}
 */
proto.sensetime.gateway.IndexBaseInfoGetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAlertCountTotal(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLivenessCompareCountTotal(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCaptureCompareCountTotal(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLivenessVerifyCountTotal(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCaptureVerifyCountTotal(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAlertCountToday(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLivenessCompareCountToday(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCaptureCompareCountToday(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLivenessVerifyCountToday(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCaptureVerifyCountToday(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFeatureCountTotal(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFeatureCountTotalRed(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFeatureCountTotalOrange(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFeatureCountTotalYellow(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFeatureCountTotalGreen(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFeatureCountLatestSync(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDeviceCountTotal(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserCountTotal(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.IndexBaseInfoGetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.IndexBaseInfoGetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.IndexBaseInfoGetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlertCountTotal();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLivenessCompareCountTotal();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCaptureCompareCountTotal();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getLivenessVerifyCountTotal();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getCaptureVerifyCountTotal();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getAlertCountToday();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getLivenessCompareCountToday();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getCaptureCompareCountToday();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getLivenessVerifyCountToday();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getCaptureVerifyCountToday();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getFeatureCountTotal();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getFeatureCountTotalRed();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getFeatureCountTotalOrange();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getFeatureCountTotalYellow();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getFeatureCountTotalGreen();
  if (f !== 0) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = message.getFeatureCountLatestSync();
  if (f !== 0) {
    writer.writeInt32(
      16,
      f
    );
  }
  f = message.getDeviceCountTotal();
  if (f !== 0) {
    writer.writeInt32(
      17,
      f
    );
  }
  f = message.getUserCountTotal();
  if (f !== 0) {
    writer.writeInt32(
      18,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      19,
      f
    );
  }
};


/**
 * optional int64 alert_count_total = 1;
 * @return {number}
 */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.getAlertCountTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.setAlertCountTotal = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 liveness_compare_count_total = 2;
 * @return {number}
 */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.getLivenessCompareCountTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.setLivenessCompareCountTotal = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 capture_compare_count_total = 3;
 * @return {number}
 */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.getCaptureCompareCountTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.setCaptureCompareCountTotal = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 liveness_verify_count_total = 4;
 * @return {number}
 */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.getLivenessVerifyCountTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.setLivenessVerifyCountTotal = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 capture_verify_count_total = 5;
 * @return {number}
 */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.getCaptureVerifyCountTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.setCaptureVerifyCountTotal = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 alert_count_today = 6;
 * @return {number}
 */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.getAlertCountToday = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.setAlertCountToday = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 liveness_compare_count_today = 7;
 * @return {number}
 */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.getLivenessCompareCountToday = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.setLivenessCompareCountToday = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 capture_compare_count_today = 8;
 * @return {number}
 */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.getCaptureCompareCountToday = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.setCaptureCompareCountToday = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 liveness_verify_count_today = 9;
 * @return {number}
 */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.getLivenessVerifyCountToday = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.setLivenessVerifyCountToday = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int32 capture_verify_count_today = 10;
 * @return {number}
 */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.getCaptureVerifyCountToday = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.setCaptureVerifyCountToday = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 feature_count_total = 11;
 * @return {number}
 */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.getFeatureCountTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.setFeatureCountTotal = function(value) {
  jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int32 feature_count_total_red = 12;
 * @return {number}
 */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.getFeatureCountTotalRed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.setFeatureCountTotalRed = function(value) {
  jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int32 feature_count_total_orange = 13;
 * @return {number}
 */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.getFeatureCountTotalOrange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.setFeatureCountTotalOrange = function(value) {
  jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int32 feature_count_total_yellow = 14;
 * @return {number}
 */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.getFeatureCountTotalYellow = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/** @param {number} value */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.setFeatureCountTotalYellow = function(value) {
  jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional int32 feature_count_total_green = 15;
 * @return {number}
 */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.getFeatureCountTotalGreen = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/** @param {number} value */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.setFeatureCountTotalGreen = function(value) {
  jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional int32 feature_count_latest_sync = 16;
 * @return {number}
 */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.getFeatureCountLatestSync = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/** @param {number} value */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.setFeatureCountLatestSync = function(value) {
  jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional int32 device_count_total = 17;
 * @return {number}
 */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.getDeviceCountTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/** @param {number} value */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.setDeviceCountTotal = function(value) {
  jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional int32 user_count_total = 18;
 * @return {number}
 */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.getUserCountTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/** @param {number} value */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.setUserCountTotal = function(value) {
  jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional int32 status = 19;
 * @return {number}
 */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/** @param {number} value */
proto.sensetime.gateway.IndexBaseInfoGetResponse.prototype.setStatus = function(value) {
  jspb.Message.setProto3IntField(this, 19, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.IndexAlertCompareGetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.IndexAlertCompareGetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.IndexAlertCompareGetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.IndexAlertCompareGetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.IndexAlertCompareGetRequest}
 */
proto.sensetime.gateway.IndexAlertCompareGetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.IndexAlertCompareGetRequest;
  return proto.sensetime.gateway.IndexAlertCompareGetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.IndexAlertCompareGetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.IndexAlertCompareGetRequest}
 */
proto.sensetime.gateway.IndexAlertCompareGetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.IndexAlertCompareGetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.IndexAlertCompareGetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.IndexAlertCompareGetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.IndexAlertCompareGetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensetime.gateway.IndexAlertCompareGetResponse.repeatedFields_ = [1,2,3,4,5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.IndexAlertCompareGetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.IndexAlertCompareGetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.IndexAlertCompareGetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.IndexAlertCompareGetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    hitCountRedList: jspb.Message.toObjectList(msg.getHitCountRedList(),
    proto.sensetime.gateway.TimeValue.toObject, includeInstance),
    hitCountOrangeList: jspb.Message.toObjectList(msg.getHitCountOrangeList(),
    proto.sensetime.gateway.TimeValue.toObject, includeInstance),
    hitCountYellowList: jspb.Message.toObjectList(msg.getHitCountYellowList(),
    proto.sensetime.gateway.TimeValue.toObject, includeInstance),
    top3DevicesList: jspb.Message.toObjectList(msg.getTop3DevicesList(),
    proto.sensetime.gateway.TopItem.toObject, includeInstance),
    top3TagsList: jspb.Message.toObjectList(msg.getTop3TagsList(),
    proto.sensetime.gateway.TopItem.toObject, includeInstance),
    top3TimeRangesList: jspb.Message.toObjectList(msg.getTop3TimeRangesList(),
    proto.sensetime.gateway.TopItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.IndexAlertCompareGetResponse}
 */
proto.sensetime.gateway.IndexAlertCompareGetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.IndexAlertCompareGetResponse;
  return proto.sensetime.gateway.IndexAlertCompareGetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.IndexAlertCompareGetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.IndexAlertCompareGetResponse}
 */
proto.sensetime.gateway.IndexAlertCompareGetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensetime.gateway.TimeValue;
      reader.readMessage(value,proto.sensetime.gateway.TimeValue.deserializeBinaryFromReader);
      msg.addHitCountRed(value);
      break;
    case 2:
      var value = new proto.sensetime.gateway.TimeValue;
      reader.readMessage(value,proto.sensetime.gateway.TimeValue.deserializeBinaryFromReader);
      msg.addHitCountOrange(value);
      break;
    case 3:
      var value = new proto.sensetime.gateway.TimeValue;
      reader.readMessage(value,proto.sensetime.gateway.TimeValue.deserializeBinaryFromReader);
      msg.addHitCountYellow(value);
      break;
    case 4:
      var value = new proto.sensetime.gateway.TopItem;
      reader.readMessage(value,proto.sensetime.gateway.TopItem.deserializeBinaryFromReader);
      msg.addTop3Devices(value);
      break;
    case 5:
      var value = new proto.sensetime.gateway.TopItem;
      reader.readMessage(value,proto.sensetime.gateway.TopItem.deserializeBinaryFromReader);
      msg.addTop3Tags(value);
      break;
    case 6:
      var value = new proto.sensetime.gateway.TopItem;
      reader.readMessage(value,proto.sensetime.gateway.TopItem.deserializeBinaryFromReader);
      msg.addTop3TimeRanges(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.IndexAlertCompareGetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.IndexAlertCompareGetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.IndexAlertCompareGetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.IndexAlertCompareGetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHitCountRedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sensetime.gateway.TimeValue.serializeBinaryToWriter
    );
  }
  f = message.getHitCountOrangeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sensetime.gateway.TimeValue.serializeBinaryToWriter
    );
  }
  f = message.getHitCountYellowList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.sensetime.gateway.TimeValue.serializeBinaryToWriter
    );
  }
  f = message.getTop3DevicesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.sensetime.gateway.TopItem.serializeBinaryToWriter
    );
  }
  f = message.getTop3TagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.sensetime.gateway.TopItem.serializeBinaryToWriter
    );
  }
  f = message.getTop3TimeRangesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.sensetime.gateway.TopItem.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TimeValue hit_count_red = 1;
 * @return {!Array<!proto.sensetime.gateway.TimeValue>}
 */
proto.sensetime.gateway.IndexAlertCompareGetResponse.prototype.getHitCountRedList = function() {
  return /** @type{!Array<!proto.sensetime.gateway.TimeValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sensetime.gateway.TimeValue, 1));
};


/** @param {!Array<!proto.sensetime.gateway.TimeValue>} value */
proto.sensetime.gateway.IndexAlertCompareGetResponse.prototype.setHitCountRedList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sensetime.gateway.TimeValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sensetime.gateway.TimeValue}
 */
proto.sensetime.gateway.IndexAlertCompareGetResponse.prototype.addHitCountRed = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sensetime.gateway.TimeValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.sensetime.gateway.IndexAlertCompareGetResponse.prototype.clearHitCountRedList = function() {
  this.setHitCountRedList([]);
};


/**
 * repeated TimeValue hit_count_orange = 2;
 * @return {!Array<!proto.sensetime.gateway.TimeValue>}
 */
proto.sensetime.gateway.IndexAlertCompareGetResponse.prototype.getHitCountOrangeList = function() {
  return /** @type{!Array<!proto.sensetime.gateway.TimeValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sensetime.gateway.TimeValue, 2));
};


/** @param {!Array<!proto.sensetime.gateway.TimeValue>} value */
proto.sensetime.gateway.IndexAlertCompareGetResponse.prototype.setHitCountOrangeList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sensetime.gateway.TimeValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sensetime.gateway.TimeValue}
 */
proto.sensetime.gateway.IndexAlertCompareGetResponse.prototype.addHitCountOrange = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sensetime.gateway.TimeValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.sensetime.gateway.IndexAlertCompareGetResponse.prototype.clearHitCountOrangeList = function() {
  this.setHitCountOrangeList([]);
};


/**
 * repeated TimeValue hit_count_yellow = 3;
 * @return {!Array<!proto.sensetime.gateway.TimeValue>}
 */
proto.sensetime.gateway.IndexAlertCompareGetResponse.prototype.getHitCountYellowList = function() {
  return /** @type{!Array<!proto.sensetime.gateway.TimeValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sensetime.gateway.TimeValue, 3));
};


/** @param {!Array<!proto.sensetime.gateway.TimeValue>} value */
proto.sensetime.gateway.IndexAlertCompareGetResponse.prototype.setHitCountYellowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.sensetime.gateway.TimeValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sensetime.gateway.TimeValue}
 */
proto.sensetime.gateway.IndexAlertCompareGetResponse.prototype.addHitCountYellow = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.sensetime.gateway.TimeValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.sensetime.gateway.IndexAlertCompareGetResponse.prototype.clearHitCountYellowList = function() {
  this.setHitCountYellowList([]);
};


/**
 * repeated TopItem top_3_devices = 4;
 * @return {!Array<!proto.sensetime.gateway.TopItem>}
 */
proto.sensetime.gateway.IndexAlertCompareGetResponse.prototype.getTop3DevicesList = function() {
  return /** @type{!Array<!proto.sensetime.gateway.TopItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sensetime.gateway.TopItem, 4));
};


/** @param {!Array<!proto.sensetime.gateway.TopItem>} value */
proto.sensetime.gateway.IndexAlertCompareGetResponse.prototype.setTop3DevicesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.sensetime.gateway.TopItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sensetime.gateway.TopItem}
 */
proto.sensetime.gateway.IndexAlertCompareGetResponse.prototype.addTop3Devices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.sensetime.gateway.TopItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.sensetime.gateway.IndexAlertCompareGetResponse.prototype.clearTop3DevicesList = function() {
  this.setTop3DevicesList([]);
};


/**
 * repeated TopItem top_3_tags = 5;
 * @return {!Array<!proto.sensetime.gateway.TopItem>}
 */
proto.sensetime.gateway.IndexAlertCompareGetResponse.prototype.getTop3TagsList = function() {
  return /** @type{!Array<!proto.sensetime.gateway.TopItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sensetime.gateway.TopItem, 5));
};


/** @param {!Array<!proto.sensetime.gateway.TopItem>} value */
proto.sensetime.gateway.IndexAlertCompareGetResponse.prototype.setTop3TagsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.sensetime.gateway.TopItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sensetime.gateway.TopItem}
 */
proto.sensetime.gateway.IndexAlertCompareGetResponse.prototype.addTop3Tags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.sensetime.gateway.TopItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.sensetime.gateway.IndexAlertCompareGetResponse.prototype.clearTop3TagsList = function() {
  this.setTop3TagsList([]);
};


/**
 * repeated TopItem top_3_time_ranges = 6;
 * @return {!Array<!proto.sensetime.gateway.TopItem>}
 */
proto.sensetime.gateway.IndexAlertCompareGetResponse.prototype.getTop3TimeRangesList = function() {
  return /** @type{!Array<!proto.sensetime.gateway.TopItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sensetime.gateway.TopItem, 6));
};


/** @param {!Array<!proto.sensetime.gateway.TopItem>} value */
proto.sensetime.gateway.IndexAlertCompareGetResponse.prototype.setTop3TimeRangesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.sensetime.gateway.TopItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sensetime.gateway.TopItem}
 */
proto.sensetime.gateway.IndexAlertCompareGetResponse.prototype.addTop3TimeRanges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.sensetime.gateway.TopItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.sensetime.gateway.IndexAlertCompareGetResponse.prototype.clearTop3TimeRangesList = function() {
  this.setTop3TimeRangesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.UpdateMiddleWareConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.UpdateMiddleWareConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.UpdateMiddleWareConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UpdateMiddleWareConfigRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: msg.getConfig_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.UpdateMiddleWareConfigRequest}
 */
proto.sensetime.gateway.UpdateMiddleWareConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.UpdateMiddleWareConfigRequest;
  return proto.sensetime.gateway.UpdateMiddleWareConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.UpdateMiddleWareConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.UpdateMiddleWareConfigRequest}
 */
proto.sensetime.gateway.UpdateMiddleWareConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.UpdateMiddleWareConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.UpdateMiddleWareConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.UpdateMiddleWareConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UpdateMiddleWareConfigRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes config = 1;
 * @return {!(string|Uint8Array)}
 */
proto.sensetime.gateway.UpdateMiddleWareConfigRequest.prototype.getConfig = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes config = 1;
 * This is a type-conversion wrapper around `getConfig()`
 * @return {string}
 */
proto.sensetime.gateway.UpdateMiddleWareConfigRequest.prototype.getConfig_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getConfig()));
};


/**
 * optional bytes config = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getConfig()`
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.UpdateMiddleWareConfigRequest.prototype.getConfig_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getConfig()));
};


/** @param {!(string|Uint8Array)} value */
proto.sensetime.gateway.UpdateMiddleWareConfigRequest.prototype.setConfig = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.UpdateMiddleWareConfigResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.UpdateMiddleWareConfigResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.UpdateMiddleWareConfigResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UpdateMiddleWareConfigResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.UpdateMiddleWareConfigResponse}
 */
proto.sensetime.gateway.UpdateMiddleWareConfigResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.UpdateMiddleWareConfigResponse;
  return proto.sensetime.gateway.UpdateMiddleWareConfigResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.UpdateMiddleWareConfigResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.UpdateMiddleWareConfigResponse}
 */
proto.sensetime.gateway.UpdateMiddleWareConfigResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.UpdateMiddleWareConfigResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.UpdateMiddleWareConfigResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.UpdateMiddleWareConfigResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.UpdateMiddleWareConfigResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.FaceDetectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.FaceDetectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.FaceDetectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.FaceDetectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    imageBlob: msg.getImageBlob_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.FaceDetectRequest}
 */
proto.sensetime.gateway.FaceDetectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.FaceDetectRequest;
  return proto.sensetime.gateway.FaceDetectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.FaceDetectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.FaceDetectRequest}
 */
proto.sensetime.gateway.FaceDetectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setImageBlob(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.FaceDetectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.FaceDetectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.FaceDetectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.FaceDetectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImageBlob_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes image_blob = 1;
 * @return {!(string|Uint8Array)}
 */
proto.sensetime.gateway.FaceDetectRequest.prototype.getImageBlob = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes image_blob = 1;
 * This is a type-conversion wrapper around `getImageBlob()`
 * @return {string}
 */
proto.sensetime.gateway.FaceDetectRequest.prototype.getImageBlob_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getImageBlob()));
};


/**
 * optional bytes image_blob = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getImageBlob()`
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.FaceDetectRequest.prototype.getImageBlob_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getImageBlob()));
};


/** @param {!(string|Uint8Array)} value */
proto.sensetime.gateway.FaceDetectRequest.prototype.setImageBlob = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensetime.gateway.FaceDetectResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.FaceDetectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.FaceDetectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.FaceDetectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.FaceDetectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    faceBoundingList: jspb.Message.toObjectList(msg.getFaceBoundingList(),
    gitlab_sz_sensetime_com_gateway_gateway$server_pb_gateway$server_pb.FaceBounding.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.FaceDetectResponse}
 */
proto.sensetime.gateway.FaceDetectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.FaceDetectResponse;
  return proto.sensetime.gateway.FaceDetectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.FaceDetectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.FaceDetectResponse}
 */
proto.sensetime.gateway.FaceDetectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new gitlab_sz_sensetime_com_gateway_gateway$server_pb_gateway$server_pb.FaceBounding;
      reader.readMessage(value,gitlab_sz_sensetime_com_gateway_gateway$server_pb_gateway$server_pb.FaceBounding.deserializeBinaryFromReader);
      msg.addFaceBounding(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.FaceDetectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.FaceDetectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.FaceDetectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.FaceDetectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFaceBoundingList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      gitlab_sz_sensetime_com_gateway_gateway$server_pb_gateway$server_pb.FaceBounding.serializeBinaryToWriter
    );
  }
};


/**
 * repeated FaceBounding face_bounding = 1;
 * @return {!Array<!proto.sensetime.gateway.FaceBounding>}
 */
proto.sensetime.gateway.FaceDetectResponse.prototype.getFaceBoundingList = function() {
  return /** @type{!Array<!proto.sensetime.gateway.FaceBounding>} */ (
    jspb.Message.getRepeatedWrapperField(this, gitlab_sz_sensetime_com_gateway_gateway$server_pb_gateway$server_pb.FaceBounding, 1));
};


/** @param {!Array<!proto.sensetime.gateway.FaceBounding>} value */
proto.sensetime.gateway.FaceDetectResponse.prototype.setFaceBoundingList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sensetime.gateway.FaceBounding=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sensetime.gateway.FaceBounding}
 */
proto.sensetime.gateway.FaceDetectResponse.prototype.addFaceBounding = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sensetime.gateway.FaceBounding, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.sensetime.gateway.FaceDetectResponse.prototype.clearFaceBoundingList = function() {
  this.setFaceBoundingList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.SystemConfigGetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.SystemConfigGetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.SystemConfigGetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.SystemConfigGetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.SystemConfigGetRequest}
 */
proto.sensetime.gateway.SystemConfigGetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.SystemConfigGetRequest;
  return proto.sensetime.gateway.SystemConfigGetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.SystemConfigGetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.SystemConfigGetRequest}
 */
proto.sensetime.gateway.SystemConfigGetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.SystemConfigGetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.SystemConfigGetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.SystemConfigGetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.SystemConfigGetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensetime.gateway.SystemConfigGetResponse.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.SystemConfigGetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.SystemConfigGetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.SystemConfigGetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.SystemConfigGetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    systemName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    systemLogoImageUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
    systemVersion: jspb.Message.getFieldWithDefault(msg, 3, ""),
    minScore: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    autoIdentityVerifyDeviceIdsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    enableAutoIdentityVerify: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    faceConfig: (f = msg.getFaceConfig()) && proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.toObject(includeInstance, f),
    licenseExpire: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.SystemConfigGetResponse}
 */
proto.sensetime.gateway.SystemConfigGetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.SystemConfigGetResponse;
  return proto.sensetime.gateway.SystemConfigGetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.SystemConfigGetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.SystemConfigGetResponse}
 */
proto.sensetime.gateway.SystemConfigGetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSystemName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSystemLogoImageUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSystemVersion(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMinScore(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addAutoIdentityVerifyDeviceIds(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableAutoIdentityVerify(value);
      break;
    case 7:
      var value = new proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig;
      reader.readMessage(value,proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.deserializeBinaryFromReader);
      msg.setFaceConfig(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setLicenseExpire(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.SystemConfigGetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.SystemConfigGetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.SystemConfigGetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.SystemConfigGetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSystemName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSystemLogoImageUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSystemVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMinScore();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getAutoIdentityVerifyDeviceIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getEnableAutoIdentityVerify();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getFaceConfig();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.serializeBinaryToWriter
    );
  }
  f = message.getLicenseExpire();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    minQuality: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    minYaw: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    maxYaw: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    minPitch: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    maxPitch: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    minRoll: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    maxRoll: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    minImageSize: jspb.Message.getFieldWithDefault(msg, 8, ""),
    maxImageSize: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig}
 */
proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig;
  return proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig}
 */
proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMinQuality(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMinYaw(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMaxYaw(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMinPitch(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMaxPitch(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMinRoll(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMaxRoll(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinImageSize(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaxImageSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinQuality();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getMinYaw();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getMaxYaw();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getMinPitch();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getMaxPitch();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getMinRoll();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getMaxRoll();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getMinImageSize();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getMaxImageSize();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional float min_quality = 1;
 * @return {number}
 */
proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.prototype.getMinQuality = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.prototype.setMinQuality = function(value) {
  jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float min_yaw = 2;
 * @return {number}
 */
proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.prototype.getMinYaw = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.prototype.setMinYaw = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float max_yaw = 3;
 * @return {number}
 */
proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.prototype.getMaxYaw = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.prototype.setMaxYaw = function(value) {
  jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float min_pitch = 4;
 * @return {number}
 */
proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.prototype.getMinPitch = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.prototype.setMinPitch = function(value) {
  jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float max_pitch = 5;
 * @return {number}
 */
proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.prototype.getMaxPitch = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.prototype.setMaxPitch = function(value) {
  jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float min_roll = 6;
 * @return {number}
 */
proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.prototype.getMinRoll = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.prototype.setMinRoll = function(value) {
  jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional float max_roll = 7;
 * @return {number}
 */
proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.prototype.getMaxRoll = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/** @param {number} value */
proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.prototype.setMaxRoll = function(value) {
  jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional string min_image_size = 8;
 * @return {string}
 */
proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.prototype.getMinImageSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.prototype.setMinImageSize = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string max_image_size = 9;
 * @return {string}
 */
proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.prototype.getMaxImageSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig.prototype.setMaxImageSize = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string system_name = 1;
 * @return {string}
 */
proto.sensetime.gateway.SystemConfigGetResponse.prototype.getSystemName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.sensetime.gateway.SystemConfigGetResponse.prototype.setSystemName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string system_logo_image_url = 2;
 * @return {string}
 */
proto.sensetime.gateway.SystemConfigGetResponse.prototype.getSystemLogoImageUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.sensetime.gateway.SystemConfigGetResponse.prototype.setSystemLogoImageUrl = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string system_version = 3;
 * @return {string}
 */
proto.sensetime.gateway.SystemConfigGetResponse.prototype.getSystemVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.sensetime.gateway.SystemConfigGetResponse.prototype.setSystemVersion = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional float min_score = 4;
 * @return {number}
 */
proto.sensetime.gateway.SystemConfigGetResponse.prototype.getMinScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.sensetime.gateway.SystemConfigGetResponse.prototype.setMinScore = function(value) {
  jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * repeated string auto_identity_verify_device_ids = 5;
 * @return {!Array<string>}
 */
proto.sensetime.gateway.SystemConfigGetResponse.prototype.getAutoIdentityVerifyDeviceIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/** @param {!Array<string>} value */
proto.sensetime.gateway.SystemConfigGetResponse.prototype.setAutoIdentityVerifyDeviceIdsList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.sensetime.gateway.SystemConfigGetResponse.prototype.addAutoIdentityVerifyDeviceIds = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.sensetime.gateway.SystemConfigGetResponse.prototype.clearAutoIdentityVerifyDeviceIdsList = function() {
  this.setAutoIdentityVerifyDeviceIdsList([]);
};


/**
 * optional bool enable_auto_identity_verify = 6;
 * @return {boolean}
 */
proto.sensetime.gateway.SystemConfigGetResponse.prototype.getEnableAutoIdentityVerify = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.sensetime.gateway.SystemConfigGetResponse.prototype.setEnableAutoIdentityVerify = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional FaceConfig face_config = 7;
 * @return {?proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig}
 */
proto.sensetime.gateway.SystemConfigGetResponse.prototype.getFaceConfig = function() {
  return /** @type{?proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig} */ (
    jspb.Message.getWrapperField(this, proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig, 7));
};


/** @param {?proto.sensetime.gateway.SystemConfigGetResponse.FaceConfig|undefined} value */
proto.sensetime.gateway.SystemConfigGetResponse.prototype.setFaceConfig = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.sensetime.gateway.SystemConfigGetResponse.prototype.clearFaceConfig = function() {
  this.setFaceConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensetime.gateway.SystemConfigGetResponse.prototype.hasFaceConfig = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string license_expire = 8;
 * @return {string}
 */
proto.sensetime.gateway.SystemConfigGetResponse.prototype.getLicenseExpire = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.sensetime.gateway.SystemConfigGetResponse.prototype.setLicenseExpire = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.SystemConfigUpdateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.SystemConfigUpdateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.SystemConfigUpdateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.SystemConfigUpdateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    systemName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    faceScore: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.SystemConfigUpdateRequest}
 */
proto.sensetime.gateway.SystemConfigUpdateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.SystemConfigUpdateRequest;
  return proto.sensetime.gateway.SystemConfigUpdateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.SystemConfigUpdateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.SystemConfigUpdateRequest}
 */
proto.sensetime.gateway.SystemConfigUpdateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSystemName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFaceScore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.SystemConfigUpdateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.SystemConfigUpdateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.SystemConfigUpdateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.SystemConfigUpdateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSystemName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFaceScore();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional string system_name = 1;
 * @return {string}
 */
proto.sensetime.gateway.SystemConfigUpdateRequest.prototype.getSystemName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.sensetime.gateway.SystemConfigUpdateRequest.prototype.setSystemName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional float face_score = 2;
 * @return {number}
 */
proto.sensetime.gateway.SystemConfigUpdateRequest.prototype.getFaceScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.sensetime.gateway.SystemConfigUpdateRequest.prototype.setFaceScore = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.SystemConfigUpdateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.SystemConfigUpdateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.SystemConfigUpdateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.SystemConfigUpdateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.SystemConfigUpdateResponse}
 */
proto.sensetime.gateway.SystemConfigUpdateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.SystemConfigUpdateResponse;
  return proto.sensetime.gateway.SystemConfigUpdateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.SystemConfigUpdateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.SystemConfigUpdateResponse}
 */
proto.sensetime.gateway.SystemConfigUpdateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.SystemConfigUpdateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.SystemConfigUpdateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.SystemConfigUpdateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.SystemConfigUpdateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.SystemLogoUpdateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.SystemLogoUpdateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.SystemLogoUpdateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.SystemLogoUpdateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    systemLogo: msg.getSystemLogo_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.SystemLogoUpdateRequest}
 */
proto.sensetime.gateway.SystemLogoUpdateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.SystemLogoUpdateRequest;
  return proto.sensetime.gateway.SystemLogoUpdateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.SystemLogoUpdateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.SystemLogoUpdateRequest}
 */
proto.sensetime.gateway.SystemLogoUpdateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSystemLogo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.SystemLogoUpdateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.SystemLogoUpdateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.SystemLogoUpdateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.SystemLogoUpdateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSystemLogo_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes system_logo = 1;
 * @return {!(string|Uint8Array)}
 */
proto.sensetime.gateway.SystemLogoUpdateRequest.prototype.getSystemLogo = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes system_logo = 1;
 * This is a type-conversion wrapper around `getSystemLogo()`
 * @return {string}
 */
proto.sensetime.gateway.SystemLogoUpdateRequest.prototype.getSystemLogo_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSystemLogo()));
};


/**
 * optional bytes system_logo = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSystemLogo()`
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.SystemLogoUpdateRequest.prototype.getSystemLogo_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSystemLogo()));
};


/** @param {!(string|Uint8Array)} value */
proto.sensetime.gateway.SystemLogoUpdateRequest.prototype.setSystemLogo = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensetime.gateway.SystemLogoUpdateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sensetime.gateway.SystemLogoUpdateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensetime.gateway.SystemLogoUpdateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.SystemLogoUpdateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensetime.gateway.SystemLogoUpdateResponse}
 */
proto.sensetime.gateway.SystemLogoUpdateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensetime.gateway.SystemLogoUpdateResponse;
  return proto.sensetime.gateway.SystemLogoUpdateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensetime.gateway.SystemLogoUpdateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensetime.gateway.SystemLogoUpdateResponse}
 */
proto.sensetime.gateway.SystemLogoUpdateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensetime.gateway.SystemLogoUpdateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensetime.gateway.SystemLogoUpdateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensetime.gateway.SystemLogoUpdateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensetime.gateway.SystemLogoUpdateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.sensetime.gateway.FeatureSyncStatus = {
  FEATURE_SYNC_STATUS_UNKNOWN: 0,
  FEATURE_SYNC_STATUS_PENDING: 1,
  FEATURE_SYNC_STATUS_RUNNING: 2,
  FEATURE_SYNC_STATUS_DONE: 3,
  FEATURE_SYNC_STATUS_ERROR: 4,
  FEATURE_SYNC_STATUS_ALL: 100
};

/**
 * @enum {number}
 */
proto.sensetime.gateway.Role = {
  ROLE_UNKNOWN: 0,
  ROLE_ADMIN: 1,
  ROLE_USER_SUPER: 2,
  ROLE_USER_1X_WITH_1N: 3,
  ROLE_USER_1X_WITH_NO_1N: 4,
  ROLE_USER_1N: 5,
  ROLE_API_SUPER: 6,
  ROLE_API_1X: 7,
  ROLE_API_1N: 8,
  ROLE_ALL: 100
};

/**
 * @enum {number}
 */
proto.sensetime.gateway.OperationType = {
  OPERATION_TYPE_UNKNOWN: 0,
  OPERATION_TYPE_LIVENESS: 1,
  OPERATION_TYPE_AUTH: 2,
  OPERATION_TYPE_UNAUTH: 3,
  OPERATION_TYPE_ALERTCOMPAREADD: 4,
  OPERATION_TYPE_ALERTCOMPAREGET: 5,
  OPERATION_TYPE_HITIDENTITYGET: 6,
  OPERATION_TYPE_IDENTITYVERIFYADD: 7,
  OPERATION_TYPE_IDENTITYVERIFYGET: 8,
  OPERATION_TYPE_USERADD: 9,
  OPERATION_TYPE_USERDELETE: 10,
  OPERATION_TYPE_USERUPDATE: 11,
  OPERATION_TYPE_USERGET: 12,
  OPERATION_TYPE_DEVICEADD: 13,
  OPERATION_TYPE_DEVICEDELETE: 14,
  OPERATION_TYPE_DEVICEUPDATE: 15,
  OPERATION_TYPE_DEVICEGET: 16,
  OPERATION_TYPE_ALL: 100
};

/**
 * @enum {number}
 */
proto.sensetime.gateway.DeviceUpdateType = {
  DEVICE_UPDATE_TYPE_UNKNOWN: 0,
  DEVICE_UPDATE_TYPE_CREATE: 1,
  DEVICE_UPDATE_TYPE_UPDATE: 2,
  DEVICE_UPDATE_TYPE_ALL: 100
};

goog.object.extend(exports, proto.sensetime.gateway);
