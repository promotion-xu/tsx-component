// package: sensetime.gateway
// file: gitlab.sz.sensetime.com/gateway/gateway-server/pb/gateway-server-internal.proto

var gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb = require("../../../../gitlab.sz.sensetime.com/gateway/gateway-server/pb/gateway-server-internal_pb");
var gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb = require("../../../../gitlab.sz.sensetime.com/gateway/gateway-server/pb/gateway-server_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var GatewayInternal = (function () {
  function GatewayInternal() {}
  GatewayInternal.serviceName = "sensetime.gateway.GatewayInternal";
  return GatewayInternal;
}());

GatewayInternal.VerifyToken = {
  methodName: "VerifyToken",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.VerifyTokenRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.VerifyTokenResponse
};

GatewayInternal.ReFreshToken = {
  methodName: "ReFreshToken",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.ReFreshTokenRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.ReFreshTokenResponse
};

GatewayInternal.Liveness = {
  methodName: "Liveness",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.LivenessRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.LivenessResponse
};

GatewayInternal.AuthorizationInternal = {
  methodName: "AuthorizationInternal",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.AuthorizationInternalRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.AuthorizationInternalResponse
};

GatewayInternal.UnAuth = {
  methodName: "UnAuth",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.UnAuthRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.UnAuthResponse
};

GatewayInternal.AlertCompare = {
  methodName: "AlertCompare",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareResponse
};

GatewayInternal.AlertCompareGet = {
  methodName: "AlertCompareGet",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareGetRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareGetResponse
};

GatewayInternal.AlertCompareList = {
  methodName: "AlertCompareList",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareListRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareListResponse
};

GatewayInternal.AlertHitUpdate = {
  methodName: "AlertHitUpdate",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.AlertHitUpdateRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.AlertHitUpdateResponse
};

GatewayInternal.IdentityVerify = {
  methodName: "IdentityVerify",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyResponse
};

GatewayInternal.IdentityVerifyGet = {
  methodName: "IdentityVerifyGet",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyGetRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyGetResponse
};

GatewayInternal.IdentityVerifyList = {
  methodName: "IdentityVerifyList",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyListRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyListResponse
};

GatewayInternal.FeatureSyncList = {
  methodName: "FeatureSyncList",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.FeatureSyncListRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.FeatureSyncListResponse
};

GatewayInternal.UserAdd = {
  methodName: "UserAdd",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserAddRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserAddResponse
};

GatewayInternal.UserDelete = {
  methodName: "UserDelete",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserDeleteRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserDeleteResponse
};

GatewayInternal.UserUpdate = {
  methodName: "UserUpdate",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserUpdateRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserUpdateResponse
};

GatewayInternal.UserUpdatePassword = {
  methodName: "UserUpdatePassword",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserUpdatePasswordRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserUpdatePasswordResponse
};

GatewayInternal.UserUpdateImage = {
  methodName: "UserUpdateImage",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserUpdateImageRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserUpdateImageResponse
};

GatewayInternal.UserList = {
  methodName: "UserList",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserListRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserListResponse
};

GatewayInternal.UserGet = {
  methodName: "UserGet",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserGetRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserGetResponse
};

GatewayInternal.LogList = {
  methodName: "LogList",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.LogListRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.LogListResponse
};

GatewayInternal.DeviceAdd = {
  methodName: "DeviceAdd",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceAddRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceAddResponse
};

GatewayInternal.DeviceDelete = {
  methodName: "DeviceDelete",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceDeleteRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceDeleteResponse
};

GatewayInternal.DeviceUpdate = {
  methodName: "DeviceUpdate",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceUpdateRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceUpdateResponse
};

GatewayInternal.DeviceList = {
  methodName: "DeviceList",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceListRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceListResponse
};

GatewayInternal.DeviceGet = {
  methodName: "DeviceGet",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceGetRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceGetResponse
};

GatewayInternal.UpdateMiddleWareConfig = {
  methodName: "UpdateMiddleWareConfig",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UpdateMiddleWareConfigRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UpdateMiddleWareConfigResponse
};

GatewayInternal.IndexBaseInfoGet = {
  methodName: "IndexBaseInfoGet",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.IndexBaseInfoGetRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.IndexBaseInfoGetResponse
};

GatewayInternal.IndexAlertCompareGet = {
  methodName: "IndexAlertCompareGet",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.IndexAlertCompareGetRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.IndexAlertCompareGetResponse
};

GatewayInternal.FaceDetect = {
  methodName: "FaceDetect",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.FaceDetectRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.FaceDetectResponse
};

GatewayInternal.SystemConfigGet = {
  methodName: "SystemConfigGet",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.SystemConfigGetRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.SystemConfigGetResponse
};

GatewayInternal.SystemConfigUpdate = {
  methodName: "SystemConfigUpdate",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.SystemConfigUpdateRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.SystemConfigUpdateResponse
};

GatewayInternal.SystemLogoUpdate = {
  methodName: "SystemLogoUpdate",
  service: GatewayInternal,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.SystemLogoUpdateRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.SystemLogoUpdateResponse
};

exports.GatewayInternal = GatewayInternal;

function GatewayInternalClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

GatewayInternalClient.prototype.verifyToken = function verifyToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.VerifyToken, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.reFreshToken = function reFreshToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.ReFreshToken, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.liveness = function liveness(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.Liveness, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.authorizationInternal = function authorizationInternal(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.AuthorizationInternal, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.unAuth = function unAuth(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.UnAuth, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.alertCompare = function alertCompare(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.AlertCompare, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.alertCompareGet = function alertCompareGet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.AlertCompareGet, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.alertCompareList = function alertCompareList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.AlertCompareList, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.alertHitUpdate = function alertHitUpdate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.AlertHitUpdate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.identityVerify = function identityVerify(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.IdentityVerify, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.identityVerifyGet = function identityVerifyGet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.IdentityVerifyGet, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.identityVerifyList = function identityVerifyList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.IdentityVerifyList, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.featureSyncList = function featureSyncList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.FeatureSyncList, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.userAdd = function userAdd(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.UserAdd, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.userDelete = function userDelete(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.UserDelete, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.userUpdate = function userUpdate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.UserUpdate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.userUpdatePassword = function userUpdatePassword(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.UserUpdatePassword, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.userUpdateImage = function userUpdateImage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.UserUpdateImage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.userList = function userList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.UserList, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.userGet = function userGet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.UserGet, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.logList = function logList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.LogList, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.deviceAdd = function deviceAdd(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.DeviceAdd, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.deviceDelete = function deviceDelete(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.DeviceDelete, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.deviceUpdate = function deviceUpdate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.DeviceUpdate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.deviceList = function deviceList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.DeviceList, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.deviceGet = function deviceGet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.DeviceGet, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.updateMiddleWareConfig = function updateMiddleWareConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.UpdateMiddleWareConfig, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.indexBaseInfoGet = function indexBaseInfoGet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.IndexBaseInfoGet, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.indexAlertCompareGet = function indexAlertCompareGet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.IndexAlertCompareGet, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.faceDetect = function faceDetect(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.FaceDetect, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.systemConfigGet = function systemConfigGet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.SystemConfigGet, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.systemConfigUpdate = function systemConfigUpdate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.SystemConfigUpdate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GatewayInternalClient.prototype.systemLogoUpdate = function systemLogoUpdate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayInternal.SystemLogoUpdate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.GatewayInternalClient = GatewayInternalClient;

