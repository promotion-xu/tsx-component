// package: sensetime.gateway
// file: gitlab.sz.sensetime.com/gateway/gateway-server/pb/gateway-server-internal.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as github_com_mwitkow_go_proto_validators_validator_pb from "../../../../github.com/mwitkow/go-proto-validators/validator_pb";
import * as gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb from "../../../../gitlab.sz.sensetime.com/gateway/gateway-server/pb/gateway-server_pb";

export class LivenessRequest extends jspb.Message {
  getVideoFile(): Uint8Array | string;
  getVideoFile_asU8(): Uint8Array;
  getVideoFile_asB64(): string;
  setVideoFile(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LivenessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LivenessRequest): LivenessRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LivenessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LivenessRequest;
  static deserializeBinaryFromReader(message: LivenessRequest, reader: jspb.BinaryReader): LivenessRequest;
}

export namespace LivenessRequest {
  export type AsObject = {
    videoFile: Uint8Array | string,
  }
}

export class LivenessResponse extends jspb.Message {
  getIsPassed(): boolean;
  setIsPassed(value: boolean): void;

  getLivenessImageId(): string;
  setLivenessImageId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LivenessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LivenessResponse): LivenessResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LivenessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LivenessResponse;
  static deserializeBinaryFromReader(message: LivenessResponse, reader: jspb.BinaryReader): LivenessResponse;
}

export namespace LivenessResponse {
  export type AsObject = {
    isPassed: boolean,
    livenessImageId: string,
  }
}

export class AuthorizationInternalRequest extends jspb.Message {
  getAccount(): string;
  setAccount(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getLivenessImageId(): string;
  setLivenessImageId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizationInternalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizationInternalRequest): AuthorizationInternalRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthorizationInternalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizationInternalRequest;
  static deserializeBinaryFromReader(message: AuthorizationInternalRequest, reader: jspb.BinaryReader): AuthorizationInternalRequest;
}

export namespace AuthorizationInternalRequest {
  export type AsObject = {
    account: string,
    password: string,
    livenessImageId: string,
  }
}

export class AuthorizationInternalResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizationInternalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizationInternalResponse): AuthorizationInternalResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthorizationInternalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizationInternalResponse;
  static deserializeBinaryFromReader(message: AuthorizationInternalResponse, reader: jspb.BinaryReader): AuthorizationInternalResponse;
}

export namespace AuthorizationInternalResponse {
  export type AsObject = {
    token: string,
  }
}

export class AlertHitUpdateRequest extends jspb.Message {
  getImageId(): string;
  setImageId(value: string): void;

  getIsAlert(): boolean;
  setIsAlert(value: boolean): void;

  getIsProcessed(): boolean;
  setIsProcessed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlertHitUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AlertHitUpdateRequest): AlertHitUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AlertHitUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlertHitUpdateRequest;
  static deserializeBinaryFromReader(message: AlertHitUpdateRequest, reader: jspb.BinaryReader): AlertHitUpdateRequest;
}

export namespace AlertHitUpdateRequest {
  export type AsObject = {
    imageId: string,
    isAlert: boolean,
    isProcessed: boolean,
  }
}

export class AlertHitUpdateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlertHitUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AlertHitUpdateResponse): AlertHitUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AlertHitUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlertHitUpdateResponse;
  static deserializeBinaryFromReader(message: AlertHitUpdateResponse, reader: jspb.BinaryReader): AlertHitUpdateResponse;
}

export namespace AlertHitUpdateResponse {
  export type AsObject = {
  }
}

export class FeatureSyncInfo extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasCreatedTime(): boolean;
  clearCreatedTime(): void;
  getCreatedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasSyncEndTime(): boolean;
  clearSyncEndTime(): void;
  getSyncEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSyncEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTotalConsumeS(): number;
  setTotalConsumeS(value: number): void;

  getAddFeatureCount(): number;
  setAddFeatureCount(value: number): void;

  getDelFeatureCount(): number;
  setDelFeatureCount(value: number): void;

  getUpdateFeatureCount(): number;
  setUpdateFeatureCount(value: number): void;

  getUpdateLevelFeatureCount(): number;
  setUpdateLevelFeatureCount(value: number): void;

  getTotalFeatureCount(): number;
  setTotalFeatureCount(value: number): void;

  getRedFeatureCount(): number;
  setRedFeatureCount(value: number): void;

  getOrangeFeatureCount(): number;
  setOrangeFeatureCount(value: number): void;

  getYellowFeatureCount(): number;
  setYellowFeatureCount(value: number): void;

  getSyncPkgCount(): number;
  setSyncPkgCount(value: number): void;

  getTotalPkgCount(): number;
  setTotalPkgCount(value: number): void;

  getProcess(): number;
  setProcess(value: number): void;

  getStatus(): FeatureSyncStatus;
  setStatus(value: FeatureSyncStatus): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  getErrInfo(): string;
  setErrInfo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureSyncInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureSyncInfo): FeatureSyncInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeatureSyncInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureSyncInfo;
  static deserializeBinaryFromReader(message: FeatureSyncInfo, reader: jspb.BinaryReader): FeatureSyncInfo;
}

export namespace FeatureSyncInfo {
  export type AsObject = {
    id: number,
    createdTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    syncEndTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    totalConsumeS: number,
    addFeatureCount: number,
    delFeatureCount: number,
    updateFeatureCount: number,
    updateLevelFeatureCount: number,
    totalFeatureCount: number,
    redFeatureCount: number,
    orangeFeatureCount: number,
    yellowFeatureCount: number,
    syncPkgCount: number,
    totalPkgCount: number,
    process: number,
    status: FeatureSyncStatus,
    requestId: string,
    errInfo: string,
  }
}

export class FeatureSyncListRequest extends jspb.Message {
  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getPageLimit(): number;
  setPageLimit(value: number): void;

  getPageOffset(): number;
  setPageOffset(value: number): void;

  getStatus(): FeatureSyncStatus;
  setStatus(value: FeatureSyncStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureSyncListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureSyncListRequest): FeatureSyncListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeatureSyncListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureSyncListRequest;
  static deserializeBinaryFromReader(message: FeatureSyncListRequest, reader: jspb.BinaryReader): FeatureSyncListRequest;
}

export namespace FeatureSyncListRequest {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    pageLimit: number,
    pageOffset: number,
    status: FeatureSyncStatus,
  }
}

export class FeatureSyncListResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): void;

  clearFeaSyncInfosList(): void;
  getFeaSyncInfosList(): Array<FeatureSyncInfo>;
  setFeaSyncInfosList(value: Array<FeatureSyncInfo>): void;
  addFeaSyncInfos(value?: FeatureSyncInfo, index?: number): FeatureSyncInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureSyncListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureSyncListResponse): FeatureSyncListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeatureSyncListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureSyncListResponse;
  static deserializeBinaryFromReader(message: FeatureSyncListResponse, reader: jspb.BinaryReader): FeatureSyncListResponse;
}

export namespace FeatureSyncListResponse {
  export type AsObject = {
    total: number,
    feaSyncInfosList: Array<FeatureSyncInfo.AsObject>,
  }
}

export class UserInfo extends jspb.Message {
  getAccount(): string;
  setAccount(value: string): void;

  getName(): string;
  setName(value: string): void;

  getRole(): Role;
  setRole(value: Role): void;

  getIdcard(): string;
  setIdcard(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getExtraInfo(): string;
  setExtraInfo(value: string): void;

  getIsActivated(): boolean;
  setIsActivated(value: boolean): void;

  hasCreatedTime(): boolean;
  clearCreatedTime(): void;
  getCreatedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getEnableAllDeviceTags(): boolean;
  setEnableAllDeviceTags(value: boolean): void;

  clearDeviceTagsList(): void;
  getDeviceTagsList(): Array<string>;
  setDeviceTagsList(value: Array<string>): void;
  addDeviceTags(value: string, index?: number): string;

  getImageUrl(): string;
  setImageUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserInfo): UserInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserInfo;
  static deserializeBinaryFromReader(message: UserInfo, reader: jspb.BinaryReader): UserInfo;
}

export namespace UserInfo {
  export type AsObject = {
    account: string,
    name: string,
    role: Role,
    idcard: string,
    email: string,
    phone: string,
    extraInfo: string,
    isActivated: boolean,
    createdTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    enableAllDeviceTags: boolean,
    deviceTagsList: Array<string>,
    imageUrl: string,
  }
}

export class UserAddRequest extends jspb.Message {
  getAccount(): string;
  setAccount(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getRole(): Role;
  setRole(value: Role): void;

  getIdcard(): string;
  setIdcard(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getExtraInfo(): string;
  setExtraInfo(value: string): void;

  getIsActivated(): boolean;
  setIsActivated(value: boolean): void;

  getEnableAllDeviceTags(): boolean;
  setEnableAllDeviceTags(value: boolean): void;

  clearDeviceTagsList(): void;
  getDeviceTagsList(): Array<string>;
  setDeviceTagsList(value: Array<string>): void;
  addDeviceTags(value: string, index?: number): string;

  getImageBlob(): Uint8Array | string;
  getImageBlob_asU8(): Uint8Array;
  getImageBlob_asB64(): string;
  setImageBlob(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserAddRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserAddRequest): UserAddRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserAddRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserAddRequest;
  static deserializeBinaryFromReader(message: UserAddRequest, reader: jspb.BinaryReader): UserAddRequest;
}

export namespace UserAddRequest {
  export type AsObject = {
    account: string,
    name: string,
    password: string,
    role: Role,
    idcard: string,
    email: string,
    phone: string,
    extraInfo: string,
    isActivated: boolean,
    enableAllDeviceTags: boolean,
    deviceTagsList: Array<string>,
    imageBlob: Uint8Array | string,
  }
}

export class UserAddResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserAddResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserAddResponse): UserAddResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserAddResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserAddResponse;
  static deserializeBinaryFromReader(message: UserAddResponse, reader: jspb.BinaryReader): UserAddResponse;
}

export namespace UserAddResponse {
  export type AsObject = {
  }
}

export class UserDeleteRequest extends jspb.Message {
  getAccount(): string;
  setAccount(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserDeleteRequest): UserDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDeleteRequest;
  static deserializeBinaryFromReader(message: UserDeleteRequest, reader: jspb.BinaryReader): UserDeleteRequest;
}

export namespace UserDeleteRequest {
  export type AsObject = {
    account: string,
  }
}

export class UserDeleteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserDeleteResponse): UserDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDeleteResponse;
  static deserializeBinaryFromReader(message: UserDeleteResponse, reader: jspb.BinaryReader): UserDeleteResponse;
}

export namespace UserDeleteResponse {
  export type AsObject = {
  }
}

export class UserUpdateRequest extends jspb.Message {
  getAccount(): string;
  setAccount(value: string): void;

  getRole(): Role;
  setRole(value: Role): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getExtraInfo(): string;
  setExtraInfo(value: string): void;

  getName(): string;
  setName(value: string): void;

  getEnableAllDeviceTags(): boolean;
  setEnableAllDeviceTags(value: boolean): void;

  clearDeviceTagsList(): void;
  getDeviceTagsList(): Array<string>;
  setDeviceTagsList(value: Array<string>): void;
  addDeviceTags(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserUpdateRequest): UserUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserUpdateRequest;
  static deserializeBinaryFromReader(message: UserUpdateRequest, reader: jspb.BinaryReader): UserUpdateRequest;
}

export namespace UserUpdateRequest {
  export type AsObject = {
    account: string,
    role: Role,
    email: string,
    phone: string,
    extraInfo: string,
    name: string,
    enableAllDeviceTags: boolean,
    deviceTagsList: Array<string>,
  }
}

export class UserUpdateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserUpdateResponse): UserUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserUpdateResponse;
  static deserializeBinaryFromReader(message: UserUpdateResponse, reader: jspb.BinaryReader): UserUpdateResponse;
}

export namespace UserUpdateResponse {
  export type AsObject = {
  }
}

export class UserUpdateImageRequest extends jspb.Message {
  getAccount(): string;
  setAccount(value: string): void;

  getImageBlob(): Uint8Array | string;
  getImageBlob_asU8(): Uint8Array;
  getImageBlob_asB64(): string;
  setImageBlob(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserUpdateImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserUpdateImageRequest): UserUpdateImageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserUpdateImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserUpdateImageRequest;
  static deserializeBinaryFromReader(message: UserUpdateImageRequest, reader: jspb.BinaryReader): UserUpdateImageRequest;
}

export namespace UserUpdateImageRequest {
  export type AsObject = {
    account: string,
    imageBlob: Uint8Array | string,
  }
}

export class UserUpdateImageResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserUpdateImageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserUpdateImageResponse): UserUpdateImageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserUpdateImageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserUpdateImageResponse;
  static deserializeBinaryFromReader(message: UserUpdateImageResponse, reader: jspb.BinaryReader): UserUpdateImageResponse;
}

export namespace UserUpdateImageResponse {
  export type AsObject = {
  }
}

export class UserUpdatePasswordRequest extends jspb.Message {
  getAccount(): string;
  setAccount(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getOriginPassword(): string;
  setOriginPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserUpdatePasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserUpdatePasswordRequest): UserUpdatePasswordRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserUpdatePasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserUpdatePasswordRequest;
  static deserializeBinaryFromReader(message: UserUpdatePasswordRequest, reader: jspb.BinaryReader): UserUpdatePasswordRequest;
}

export namespace UserUpdatePasswordRequest {
  export type AsObject = {
    account: string,
    password: string,
    originPassword: string,
  }
}

export class UserUpdatePasswordResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserUpdatePasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserUpdatePasswordResponse): UserUpdatePasswordResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserUpdatePasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserUpdatePasswordResponse;
  static deserializeBinaryFromReader(message: UserUpdatePasswordResponse, reader: jspb.BinaryReader): UserUpdatePasswordResponse;
}

export namespace UserUpdatePasswordResponse {
  export type AsObject = {
  }
}

export class UserListRequest extends jspb.Message {
  getPageLimit(): number;
  setPageLimit(value: number): void;

  getPageOffset(): number;
  setPageOffset(value: number): void;

  getAccount(): string;
  setAccount(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserListRequest): UserListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListRequest;
  static deserializeBinaryFromReader(message: UserListRequest, reader: jspb.BinaryReader): UserListRequest;
}

export namespace UserListRequest {
  export type AsObject = {
    pageLimit: number,
    pageOffset: number,
    account: string,
  }
}

export class UserListResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): void;

  clearUserInfosList(): void;
  getUserInfosList(): Array<UserInfo>;
  setUserInfosList(value: Array<UserInfo>): void;
  addUserInfos(value?: UserInfo, index?: number): UserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserListResponse): UserListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListResponse;
  static deserializeBinaryFromReader(message: UserListResponse, reader: jspb.BinaryReader): UserListResponse;
}

export namespace UserListResponse {
  export type AsObject = {
    total: number,
    userInfosList: Array<UserInfo.AsObject>,
  }
}

export class UserGetRequest extends jspb.Message {
  getAccount(): string;
  setAccount(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserGetRequest): UserGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserGetRequest;
  static deserializeBinaryFromReader(message: UserGetRequest, reader: jspb.BinaryReader): UserGetRequest;
}

export namespace UserGetRequest {
  export type AsObject = {
    account: string,
  }
}

export class UserGetResponse extends jspb.Message {
  hasUserInfo(): boolean;
  clearUserInfo(): void;
  getUserInfo(): UserInfo | undefined;
  setUserInfo(value?: UserInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserGetResponse): UserGetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserGetResponse;
  static deserializeBinaryFromReader(message: UserGetResponse, reader: jspb.BinaryReader): UserGetResponse;
}

export namespace UserGetResponse {
  export type AsObject = {
    userInfo?: UserInfo.AsObject,
  }
}

export class LogListRequest extends jspb.Message {
  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getPageLimit(): number;
  setPageLimit(value: number): void;

  getPageOffset(): number;
  setPageOffset(value: number): void;

  getAccount(): string;
  setAccount(value: string): void;

  getOptionType(): OperationType;
  setOptionType(value: OperationType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogListRequest): LogListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogListRequest;
  static deserializeBinaryFromReader(message: LogListRequest, reader: jspb.BinaryReader): LogListRequest;
}

export namespace LogListRequest {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    pageLimit: number,
    pageOffset: number,
    account: string,
    optionType: OperationType,
  }
}

export class LogListResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): void;

  clearLogInfoList(): void;
  getLogInfoList(): Array<LogListResponse.LogInfo>;
  setLogInfoList(value: Array<LogListResponse.LogInfo>): void;
  addLogInfo(value?: LogListResponse.LogInfo, index?: number): LogListResponse.LogInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LogListResponse): LogListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogListResponse;
  static deserializeBinaryFromReader(message: LogListResponse, reader: jspb.BinaryReader): LogListResponse;
}

export namespace LogListResponse {
  export type AsObject = {
    total: number,
    logInfoList: Array<LogListResponse.LogInfo.AsObject>,
  }

  export class LogInfo extends jspb.Message {
    getAccount(): string;
    setAccount(value: string): void;

    hasCreatedTime(): boolean;
    clearCreatedTime(): void;
    getCreatedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getOptionType(): OperationType;
    setOptionType(value: OperationType): void;

    getExtraInfo(): string;
    setExtraInfo(value: string): void;

    getImageId(): string;
    setImageId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogInfo.AsObject;
    static toObject(includeInstance: boolean, msg: LogInfo): LogInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogInfo;
    static deserializeBinaryFromReader(message: LogInfo, reader: jspb.BinaryReader): LogInfo;
  }

  export namespace LogInfo {
    export type AsObject = {
      account: string,
      createdTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      optionType: OperationType,
      extraInfo: string,
      imageId: string,
    }
  }
}

export class DeviceInfo extends jspb.Message {
  getDeviceId(): string;
  setDeviceId(value: string): void;

  getDeviceName(): string;
  setDeviceName(value: string): void;

  getDeviceUnitCode(): string;
  setDeviceUnitCode(value: string): void;

  getDeviceUnitName(): string;
  setDeviceUnitName(value: string): void;

  getDeviceAddrCode(): string;
  setDeviceAddrCode(value: string): void;

  getDeviceAddrDetail(): string;
  setDeviceAddrDetail(value: string): void;

  getDeviceCoordinateX(): number;
  setDeviceCoordinateX(value: number): void;

  getDeviceCoordinateY(): number;
  setDeviceCoordinateY(value: number): void;

  getDeviceTag(): string;
  setDeviceTag(value: string): void;

  getDeviceExtraInfo(): string;
  setDeviceExtraInfo(value: string): void;

  hasCreatedTime(): boolean;
  clearCreatedTime(): void;
  getCreatedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedTime(): boolean;
  clearUpdatedTime(): void;
  getUpdatedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getUpdateType(): DeviceUpdateType;
  setUpdateType(value: DeviceUpdateType): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  getUploadStatus(): string;
  setUploadStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceInfo): DeviceInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceInfo;
  static deserializeBinaryFromReader(message: DeviceInfo, reader: jspb.BinaryReader): DeviceInfo;
}

export namespace DeviceInfo {
  export type AsObject = {
    deviceId: string,
    deviceName: string,
    deviceUnitCode: string,
    deviceUnitName: string,
    deviceAddrCode: string,
    deviceAddrDetail: string,
    deviceCoordinateX: number,
    deviceCoordinateY: number,
    deviceTag: string,
    deviceExtraInfo: string,
    createdTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateType: DeviceUpdateType,
    requestId: string,
    uploadStatus: string,
  }
}

export class DeviceAddRequest extends jspb.Message {
  getDeviceId(): string;
  setDeviceId(value: string): void;

  getDeviceName(): string;
  setDeviceName(value: string): void;

  getDeviceUnitCode(): string;
  setDeviceUnitCode(value: string): void;

  getDeviceUnitName(): string;
  setDeviceUnitName(value: string): void;

  getDeviceAddrCode(): string;
  setDeviceAddrCode(value: string): void;

  getDeviceAddrDetail(): string;
  setDeviceAddrDetail(value: string): void;

  getDeviceCoordinateX(): number;
  setDeviceCoordinateX(value: number): void;

  getDeviceCoordinateY(): number;
  setDeviceCoordinateY(value: number): void;

  getDeviceTag(): string;
  setDeviceTag(value: string): void;

  getDeviceExtraInfo(): string;
  setDeviceExtraInfo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceAddRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceAddRequest): DeviceAddRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceAddRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceAddRequest;
  static deserializeBinaryFromReader(message: DeviceAddRequest, reader: jspb.BinaryReader): DeviceAddRequest;
}

export namespace DeviceAddRequest {
  export type AsObject = {
    deviceId: string,
    deviceName: string,
    deviceUnitCode: string,
    deviceUnitName: string,
    deviceAddrCode: string,
    deviceAddrDetail: string,
    deviceCoordinateX: number,
    deviceCoordinateY: number,
    deviceTag: string,
    deviceExtraInfo: string,
  }
}

export class DeviceAddResponse extends jspb.Message {
  getDeviceId(): string;
  setDeviceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceAddResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceAddResponse): DeviceAddResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceAddResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceAddResponse;
  static deserializeBinaryFromReader(message: DeviceAddResponse, reader: jspb.BinaryReader): DeviceAddResponse;
}

export namespace DeviceAddResponse {
  export type AsObject = {
    deviceId: string,
  }
}

export class DeviceDeleteRequest extends jspb.Message {
  getDeviceId(): string;
  setDeviceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceDeleteRequest): DeviceDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceDeleteRequest;
  static deserializeBinaryFromReader(message: DeviceDeleteRequest, reader: jspb.BinaryReader): DeviceDeleteRequest;
}

export namespace DeviceDeleteRequest {
  export type AsObject = {
    deviceId: string,
  }
}

export class DeviceDeleteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceDeleteResponse): DeviceDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceDeleteResponse;
  static deserializeBinaryFromReader(message: DeviceDeleteResponse, reader: jspb.BinaryReader): DeviceDeleteResponse;
}

export namespace DeviceDeleteResponse {
  export type AsObject = {
  }
}

export class DeviceUpdateRequest extends jspb.Message {
  getDeviceId(): string;
  setDeviceId(value: string): void;

  getDeviceName(): string;
  setDeviceName(value: string): void;

  getDeviceUnitCode(): string;
  setDeviceUnitCode(value: string): void;

  getDeviceUnitName(): string;
  setDeviceUnitName(value: string): void;

  getDeviceAddrCode(): string;
  setDeviceAddrCode(value: string): void;

  getDeviceAddrDetail(): string;
  setDeviceAddrDetail(value: string): void;

  getDeviceCoordinateX(): number;
  setDeviceCoordinateX(value: number): void;

  getDeviceCoordinateY(): number;
  setDeviceCoordinateY(value: number): void;

  getDeviceTag(): string;
  setDeviceTag(value: string): void;

  getDeviceExtraInfo(): string;
  setDeviceExtraInfo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceUpdateRequest): DeviceUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceUpdateRequest;
  static deserializeBinaryFromReader(message: DeviceUpdateRequest, reader: jspb.BinaryReader): DeviceUpdateRequest;
}

export namespace DeviceUpdateRequest {
  export type AsObject = {
    deviceId: string,
    deviceName: string,
    deviceUnitCode: string,
    deviceUnitName: string,
    deviceAddrCode: string,
    deviceAddrDetail: string,
    deviceCoordinateX: number,
    deviceCoordinateY: number,
    deviceTag: string,
    deviceExtraInfo: string,
  }
}

export class DeviceUpdateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceUpdateResponse): DeviceUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceUpdateResponse;
  static deserializeBinaryFromReader(message: DeviceUpdateResponse, reader: jspb.BinaryReader): DeviceUpdateResponse;
}

export namespace DeviceUpdateResponse {
  export type AsObject = {
  }
}

export class DeviceListRequest extends jspb.Message {
  getPageLimit(): number;
  setPageLimit(value: number): void;

  getPageOffset(): number;
  setPageOffset(value: number): void;

  getSearchKeyWord(): string;
  setSearchKeyWord(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceListRequest): DeviceListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceListRequest;
  static deserializeBinaryFromReader(message: DeviceListRequest, reader: jspb.BinaryReader): DeviceListRequest;
}

export namespace DeviceListRequest {
  export type AsObject = {
    pageLimit: number,
    pageOffset: number,
    searchKeyWord: string,
  }
}

export class DeviceListResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): void;

  clearDeviceInfosList(): void;
  getDeviceInfosList(): Array<DeviceInfo>;
  setDeviceInfosList(value: Array<DeviceInfo>): void;
  addDeviceInfos(value?: DeviceInfo, index?: number): DeviceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceListResponse): DeviceListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceListResponse;
  static deserializeBinaryFromReader(message: DeviceListResponse, reader: jspb.BinaryReader): DeviceListResponse;
}

export namespace DeviceListResponse {
  export type AsObject = {
    total: number,
    deviceInfosList: Array<DeviceInfo.AsObject>,
  }
}

export class DeviceGetRequest extends jspb.Message {
  getDeviceId(): string;
  setDeviceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceGetRequest): DeviceGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceGetRequest;
  static deserializeBinaryFromReader(message: DeviceGetRequest, reader: jspb.BinaryReader): DeviceGetRequest;
}

export namespace DeviceGetRequest {
  export type AsObject = {
    deviceId: string,
  }
}

export class DeviceGetResponse extends jspb.Message {
  hasDeviceInfo(): boolean;
  clearDeviceInfo(): void;
  getDeviceInfo(): DeviceInfo | undefined;
  setDeviceInfo(value?: DeviceInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceGetResponse): DeviceGetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceGetResponse;
  static deserializeBinaryFromReader(message: DeviceGetResponse, reader: jspb.BinaryReader): DeviceGetResponse;
}

export namespace DeviceGetResponse {
  export type AsObject = {
    deviceInfo?: DeviceInfo.AsObject,
  }
}

export class VerifyTokenRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyTokenRequest): VerifyTokenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyTokenRequest;
  static deserializeBinaryFromReader(message: VerifyTokenRequest, reader: jspb.BinaryReader): VerifyTokenRequest;
}

export namespace VerifyTokenRequest {
  export type AsObject = {
  }
}

export class VerifyTokenResponse extends jspb.Message {
  hasUserInfo(): boolean;
  clearUserInfo(): void;
  getUserInfo(): UserInfo | undefined;
  setUserInfo(value?: UserInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyTokenResponse): VerifyTokenResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyTokenResponse;
  static deserializeBinaryFromReader(message: VerifyTokenResponse, reader: jspb.BinaryReader): VerifyTokenResponse;
}

export namespace VerifyTokenResponse {
  export type AsObject = {
    userInfo?: UserInfo.AsObject,
  }
}

export class ReFreshTokenRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReFreshTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReFreshTokenRequest): ReFreshTokenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReFreshTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReFreshTokenRequest;
  static deserializeBinaryFromReader(message: ReFreshTokenRequest, reader: jspb.BinaryReader): ReFreshTokenRequest;
}

export namespace ReFreshTokenRequest {
  export type AsObject = {
  }
}

export class ReFreshTokenResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReFreshTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReFreshTokenResponse): ReFreshTokenResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReFreshTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReFreshTokenResponse;
  static deserializeBinaryFromReader(message: ReFreshTokenResponse, reader: jspb.BinaryReader): ReFreshTokenResponse;
}

export namespace ReFreshTokenResponse {
  export type AsObject = {
    token: string,
  }
}

export class TimeValue extends jspb.Message {
  getDate(): string;
  setDate(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeValue.AsObject;
  static toObject(includeInstance: boolean, msg: TimeValue): TimeValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeValue;
  static deserializeBinaryFromReader(message: TimeValue, reader: jspb.BinaryReader): TimeValue;
}

export namespace TimeValue {
  export type AsObject = {
    date: string,
    value: number,
  }
}

export class TopItem extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopItem.AsObject;
  static toObject(includeInstance: boolean, msg: TopItem): TopItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TopItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopItem;
  static deserializeBinaryFromReader(message: TopItem, reader: jspb.BinaryReader): TopItem;
}

export namespace TopItem {
  export type AsObject = {
    name: string,
    count: number,
  }
}

export class IndexBaseInfoGetRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexBaseInfoGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IndexBaseInfoGetRequest): IndexBaseInfoGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IndexBaseInfoGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexBaseInfoGetRequest;
  static deserializeBinaryFromReader(message: IndexBaseInfoGetRequest, reader: jspb.BinaryReader): IndexBaseInfoGetRequest;
}

export namespace IndexBaseInfoGetRequest {
  export type AsObject = {
  }
}

export class IndexBaseInfoGetResponse extends jspb.Message {
  getAlertCountTotal(): number;
  setAlertCountTotal(value: number): void;

  getLivenessCompareCountTotal(): number;
  setLivenessCompareCountTotal(value: number): void;

  getCaptureCompareCountTotal(): number;
  setCaptureCompareCountTotal(value: number): void;

  getLivenessVerifyCountTotal(): number;
  setLivenessVerifyCountTotal(value: number): void;

  getCaptureVerifyCountTotal(): number;
  setCaptureVerifyCountTotal(value: number): void;

  getAlertCountToday(): number;
  setAlertCountToday(value: number): void;

  getLivenessCompareCountToday(): number;
  setLivenessCompareCountToday(value: number): void;

  getCaptureCompareCountToday(): number;
  setCaptureCompareCountToday(value: number): void;

  getLivenessVerifyCountToday(): number;
  setLivenessVerifyCountToday(value: number): void;

  getCaptureVerifyCountToday(): number;
  setCaptureVerifyCountToday(value: number): void;

  getFeatureCountTotal(): number;
  setFeatureCountTotal(value: number): void;

  getFeatureCountTotalRed(): number;
  setFeatureCountTotalRed(value: number): void;

  getFeatureCountTotalOrange(): number;
  setFeatureCountTotalOrange(value: number): void;

  getFeatureCountTotalYellow(): number;
  setFeatureCountTotalYellow(value: number): void;

  getFeatureCountTotalGreen(): number;
  setFeatureCountTotalGreen(value: number): void;

  getFeatureCountLatestSync(): number;
  setFeatureCountLatestSync(value: number): void;

  getDeviceCountTotal(): number;
  setDeviceCountTotal(value: number): void;

  getUserCountTotal(): number;
  setUserCountTotal(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexBaseInfoGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IndexBaseInfoGetResponse): IndexBaseInfoGetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IndexBaseInfoGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexBaseInfoGetResponse;
  static deserializeBinaryFromReader(message: IndexBaseInfoGetResponse, reader: jspb.BinaryReader): IndexBaseInfoGetResponse;
}

export namespace IndexBaseInfoGetResponse {
  export type AsObject = {
    alertCountTotal: number,
    livenessCompareCountTotal: number,
    captureCompareCountTotal: number,
    livenessVerifyCountTotal: number,
    captureVerifyCountTotal: number,
    alertCountToday: number,
    livenessCompareCountToday: number,
    captureCompareCountToday: number,
    livenessVerifyCountToday: number,
    captureVerifyCountToday: number,
    featureCountTotal: number,
    featureCountTotalRed: number,
    featureCountTotalOrange: number,
    featureCountTotalYellow: number,
    featureCountTotalGreen: number,
    featureCountLatestSync: number,
    deviceCountTotal: number,
    userCountTotal: number,
    status: number,
  }
}

export class IndexAlertCompareGetRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexAlertCompareGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IndexAlertCompareGetRequest): IndexAlertCompareGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IndexAlertCompareGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexAlertCompareGetRequest;
  static deserializeBinaryFromReader(message: IndexAlertCompareGetRequest, reader: jspb.BinaryReader): IndexAlertCompareGetRequest;
}

export namespace IndexAlertCompareGetRequest {
  export type AsObject = {
  }
}

export class IndexAlertCompareGetResponse extends jspb.Message {
  clearHitCountRedList(): void;
  getHitCountRedList(): Array<TimeValue>;
  setHitCountRedList(value: Array<TimeValue>): void;
  addHitCountRed(value?: TimeValue, index?: number): TimeValue;

  clearHitCountOrangeList(): void;
  getHitCountOrangeList(): Array<TimeValue>;
  setHitCountOrangeList(value: Array<TimeValue>): void;
  addHitCountOrange(value?: TimeValue, index?: number): TimeValue;

  clearHitCountYellowList(): void;
  getHitCountYellowList(): Array<TimeValue>;
  setHitCountYellowList(value: Array<TimeValue>): void;
  addHitCountYellow(value?: TimeValue, index?: number): TimeValue;

  clearTop3DevicesList(): void;
  getTop3DevicesList(): Array<TopItem>;
  setTop3DevicesList(value: Array<TopItem>): void;
  addTop3Devices(value?: TopItem, index?: number): TopItem;

  clearTop3TagsList(): void;
  getTop3TagsList(): Array<TopItem>;
  setTop3TagsList(value: Array<TopItem>): void;
  addTop3Tags(value?: TopItem, index?: number): TopItem;

  clearTop3TimeRangesList(): void;
  getTop3TimeRangesList(): Array<TopItem>;
  setTop3TimeRangesList(value: Array<TopItem>): void;
  addTop3TimeRanges(value?: TopItem, index?: number): TopItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexAlertCompareGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IndexAlertCompareGetResponse): IndexAlertCompareGetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IndexAlertCompareGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexAlertCompareGetResponse;
  static deserializeBinaryFromReader(message: IndexAlertCompareGetResponse, reader: jspb.BinaryReader): IndexAlertCompareGetResponse;
}

export namespace IndexAlertCompareGetResponse {
  export type AsObject = {
    hitCountRedList: Array<TimeValue.AsObject>,
    hitCountOrangeList: Array<TimeValue.AsObject>,
    hitCountYellowList: Array<TimeValue.AsObject>,
    top3DevicesList: Array<TopItem.AsObject>,
    top3TagsList: Array<TopItem.AsObject>,
    top3TimeRangesList: Array<TopItem.AsObject>,
  }
}

export class UpdateMiddleWareConfigRequest extends jspb.Message {
  getConfig(): Uint8Array | string;
  getConfig_asU8(): Uint8Array;
  getConfig_asB64(): string;
  setConfig(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMiddleWareConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMiddleWareConfigRequest): UpdateMiddleWareConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMiddleWareConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMiddleWareConfigRequest;
  static deserializeBinaryFromReader(message: UpdateMiddleWareConfigRequest, reader: jspb.BinaryReader): UpdateMiddleWareConfigRequest;
}

export namespace UpdateMiddleWareConfigRequest {
  export type AsObject = {
    config: Uint8Array | string,
  }
}

export class UpdateMiddleWareConfigResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMiddleWareConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMiddleWareConfigResponse): UpdateMiddleWareConfigResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMiddleWareConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMiddleWareConfigResponse;
  static deserializeBinaryFromReader(message: UpdateMiddleWareConfigResponse, reader: jspb.BinaryReader): UpdateMiddleWareConfigResponse;
}

export namespace UpdateMiddleWareConfigResponse {
  export type AsObject = {
  }
}

export class FaceDetectRequest extends jspb.Message {
  getImageBlob(): Uint8Array | string;
  getImageBlob_asU8(): Uint8Array;
  getImageBlob_asB64(): string;
  setImageBlob(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceDetectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FaceDetectRequest): FaceDetectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FaceDetectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceDetectRequest;
  static deserializeBinaryFromReader(message: FaceDetectRequest, reader: jspb.BinaryReader): FaceDetectRequest;
}

export namespace FaceDetectRequest {
  export type AsObject = {
    imageBlob: Uint8Array | string,
  }
}

export class FaceDetectResponse extends jspb.Message {
  clearFaceBoundingList(): void;
  getFaceBoundingList(): Array<gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.FaceBounding>;
  setFaceBoundingList(value: Array<gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.FaceBounding>): void;
  addFaceBounding(value?: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.FaceBounding, index?: number): gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.FaceBounding;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceDetectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FaceDetectResponse): FaceDetectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FaceDetectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceDetectResponse;
  static deserializeBinaryFromReader(message: FaceDetectResponse, reader: jspb.BinaryReader): FaceDetectResponse;
}

export namespace FaceDetectResponse {
  export type AsObject = {
    faceBoundingList: Array<gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.FaceBounding.AsObject>,
  }
}

export class SystemConfigGetRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemConfigGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SystemConfigGetRequest): SystemConfigGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SystemConfigGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemConfigGetRequest;
  static deserializeBinaryFromReader(message: SystemConfigGetRequest, reader: jspb.BinaryReader): SystemConfigGetRequest;
}

export namespace SystemConfigGetRequest {
  export type AsObject = {
  }
}

export class SystemConfigGetResponse extends jspb.Message {
  getSystemName(): string;
  setSystemName(value: string): void;

  getSystemLogoImageUrl(): string;
  setSystemLogoImageUrl(value: string): void;

  getSystemVersion(): string;
  setSystemVersion(value: string): void;

  getMinScore(): number;
  setMinScore(value: number): void;

  clearAutoIdentityVerifyDeviceIdsList(): void;
  getAutoIdentityVerifyDeviceIdsList(): Array<string>;
  setAutoIdentityVerifyDeviceIdsList(value: Array<string>): void;
  addAutoIdentityVerifyDeviceIds(value: string, index?: number): string;

  getEnableAutoIdentityVerify(): boolean;
  setEnableAutoIdentityVerify(value: boolean): void;

  hasFaceConfig(): boolean;
  clearFaceConfig(): void;
  getFaceConfig(): SystemConfigGetResponse.FaceConfig | undefined;
  setFaceConfig(value?: SystemConfigGetResponse.FaceConfig): void;

  getLicenseExpire(): string;
  setLicenseExpire(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemConfigGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SystemConfigGetResponse): SystemConfigGetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SystemConfigGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemConfigGetResponse;
  static deserializeBinaryFromReader(message: SystemConfigGetResponse, reader: jspb.BinaryReader): SystemConfigGetResponse;
}

export namespace SystemConfigGetResponse {
  export type AsObject = {
    systemName: string,
    systemLogoImageUrl: string,
    systemVersion: string,
    minScore: number,
    autoIdentityVerifyDeviceIdsList: Array<string>,
    enableAutoIdentityVerify: boolean,
    faceConfig?: SystemConfigGetResponse.FaceConfig.AsObject,
    licenseExpire: string,
  }

  export class FaceConfig extends jspb.Message {
    getMinQuality(): number;
    setMinQuality(value: number): void;

    getMinYaw(): number;
    setMinYaw(value: number): void;

    getMaxYaw(): number;
    setMaxYaw(value: number): void;

    getMinPitch(): number;
    setMinPitch(value: number): void;

    getMaxPitch(): number;
    setMaxPitch(value: number): void;

    getMinRoll(): number;
    setMinRoll(value: number): void;

    getMaxRoll(): number;
    setMaxRoll(value: number): void;

    getMinImageSize(): string;
    setMinImageSize(value: string): void;

    getMaxImageSize(): string;
    setMaxImageSize(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FaceConfig.AsObject;
    static toObject(includeInstance: boolean, msg: FaceConfig): FaceConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FaceConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FaceConfig;
    static deserializeBinaryFromReader(message: FaceConfig, reader: jspb.BinaryReader): FaceConfig;
  }

  export namespace FaceConfig {
    export type AsObject = {
      minQuality: number,
      minYaw: number,
      maxYaw: number,
      minPitch: number,
      maxPitch: number,
      minRoll: number,
      maxRoll: number,
      minImageSize: string,
      maxImageSize: string,
    }
  }
}

export class SystemConfigUpdateRequest extends jspb.Message {
  getSystemName(): string;
  setSystemName(value: string): void;

  getFaceScore(): number;
  setFaceScore(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemConfigUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SystemConfigUpdateRequest): SystemConfigUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SystemConfigUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemConfigUpdateRequest;
  static deserializeBinaryFromReader(message: SystemConfigUpdateRequest, reader: jspb.BinaryReader): SystemConfigUpdateRequest;
}

export namespace SystemConfigUpdateRequest {
  export type AsObject = {
    systemName: string,
    faceScore: number,
  }
}

export class SystemConfigUpdateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemConfigUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SystemConfigUpdateResponse): SystemConfigUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SystemConfigUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemConfigUpdateResponse;
  static deserializeBinaryFromReader(message: SystemConfigUpdateResponse, reader: jspb.BinaryReader): SystemConfigUpdateResponse;
}

export namespace SystemConfigUpdateResponse {
  export type AsObject = {
  }
}

export class SystemLogoUpdateRequest extends jspb.Message {
  getSystemLogo(): Uint8Array | string;
  getSystemLogo_asU8(): Uint8Array;
  getSystemLogo_asB64(): string;
  setSystemLogo(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemLogoUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SystemLogoUpdateRequest): SystemLogoUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SystemLogoUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemLogoUpdateRequest;
  static deserializeBinaryFromReader(message: SystemLogoUpdateRequest, reader: jspb.BinaryReader): SystemLogoUpdateRequest;
}

export namespace SystemLogoUpdateRequest {
  export type AsObject = {
    systemLogo: Uint8Array | string,
  }
}

export class SystemLogoUpdateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemLogoUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SystemLogoUpdateResponse): SystemLogoUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SystemLogoUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemLogoUpdateResponse;
  static deserializeBinaryFromReader(message: SystemLogoUpdateResponse, reader: jspb.BinaryReader): SystemLogoUpdateResponse;
}

export namespace SystemLogoUpdateResponse {
  export type AsObject = {
  }
}

export enum FeatureSyncStatus {
  FEATURE_SYNC_STATUS_UNKNOWN = 0,
  FEATURE_SYNC_STATUS_PENDING = 1,
  FEATURE_SYNC_STATUS_RUNNING = 2,
  FEATURE_SYNC_STATUS_DONE = 3,
  FEATURE_SYNC_STATUS_ERROR = 4,
  FEATURE_SYNC_STATUS_ALL = 100,
}

export enum Role {
  ROLE_UNKNOWN = 0,
  ROLE_ADMIN = 1,
  ROLE_USER_SUPER = 2,
  ROLE_USER_1X_WITH_1N = 3,
  ROLE_USER_1X_WITH_NO_1N = 4,
  ROLE_USER_1N = 5,
  ROLE_API_SUPER = 6,
  ROLE_API_1X = 7,
  ROLE_API_1N = 8,
  ROLE_ALL = 100,
}

export enum OperationType {
  OPERATION_TYPE_UNKNOWN = 0,
  OPERATION_TYPE_LIVENESS = 1,
  OPERATION_TYPE_AUTH = 2,
  OPERATION_TYPE_UNAUTH = 3,
  OPERATION_TYPE_ALERTCOMPAREADD = 4,
  OPERATION_TYPE_ALERTCOMPAREGET = 5,
  OPERATION_TYPE_HITIDENTITYGET = 6,
  OPERATION_TYPE_IDENTITYVERIFYADD = 7,
  OPERATION_TYPE_IDENTITYVERIFYGET = 8,
  OPERATION_TYPE_USERADD = 9,
  OPERATION_TYPE_USERDELETE = 10,
  OPERATION_TYPE_USERUPDATE = 11,
  OPERATION_TYPE_USERGET = 12,
  OPERATION_TYPE_DEVICEADD = 13,
  OPERATION_TYPE_DEVICEDELETE = 14,
  OPERATION_TYPE_DEVICEUPDATE = 15,
  OPERATION_TYPE_DEVICEGET = 16,
  OPERATION_TYPE_ALL = 100,
}

export enum DeviceUpdateType {
  DEVICE_UPDATE_TYPE_UNKNOWN = 0,
  DEVICE_UPDATE_TYPE_CREATE = 1,
  DEVICE_UPDATE_TYPE_UPDATE = 2,
  DEVICE_UPDATE_TYPE_ALL = 100,
}

