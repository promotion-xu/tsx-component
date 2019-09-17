// package: sensetime.gateway
// file: gitlab.sz.sensetime.com/gateway/gateway-server/pb/gateway-server.proto

var gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb = require("../../../../gitlab.sz.sensetime.com/gateway/gateway-server/pb/gateway-server_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var GatewayPublic = (function () {
  function GatewayPublic() {}
  GatewayPublic.serviceName = "sensetime.gateway.GatewayPublic";
  return GatewayPublic;
}());

GatewayPublic.Authorization = {
  methodName: "Authorization",
  service: GatewayPublic,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AuthorizationRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AuthorizationResponse
};

GatewayPublic.UnAuth = {
  methodName: "UnAuth",
  service: GatewayPublic,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.UnAuthRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.UnAuthResponse
};

GatewayPublic.AlertCompare = {
  methodName: "AlertCompare",
  service: GatewayPublic,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareResponse
};

GatewayPublic.AlertCompareGet = {
  methodName: "AlertCompareGet",
  service: GatewayPublic,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareGetRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareGetResponse
};

GatewayPublic.AlertCompareList = {
  methodName: "AlertCompareList",
  service: GatewayPublic,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareListRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareListResponse
};

GatewayPublic.IdentityVerifyGet = {
  methodName: "IdentityVerifyGet",
  service: GatewayPublic,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyGetRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyGetResponse
};

GatewayPublic.IdentityVerifyList = {
  methodName: "IdentityVerifyList",
  service: GatewayPublic,
  requestStream: false,
  responseStream: false,
  requestType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyListRequest,
  responseType: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyListResponse
};

exports.GatewayPublic = GatewayPublic;

function GatewayPublicClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

GatewayPublicClient.prototype.authorization = function authorization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayPublic.Authorization, {
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

GatewayPublicClient.prototype.unAuth = function unAuth(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayPublic.UnAuth, {
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

GatewayPublicClient.prototype.alertCompare = function alertCompare(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayPublic.AlertCompare, {
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

GatewayPublicClient.prototype.alertCompareGet = function alertCompareGet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayPublic.AlertCompareGet, {
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

GatewayPublicClient.prototype.alertCompareList = function alertCompareList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayPublic.AlertCompareList, {
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

GatewayPublicClient.prototype.identityVerifyGet = function identityVerifyGet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayPublic.IdentityVerifyGet, {
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

GatewayPublicClient.prototype.identityVerifyList = function identityVerifyList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GatewayPublic.IdentityVerifyList, {
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

exports.GatewayPublicClient = GatewayPublicClient;

