// package: sensetime.gateway
// file: gitlab.sz.sensetime.com/gateway/gateway-server/pb/gateway-server.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as github_com_mwitkow_go_proto_validators_validator_pb from "../../../../github.com/mwitkow/go-proto-validators/validator_pb";

export class AuthorizationRequest extends jspb.Message {
  getAccount(): string;
  setAccount(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizationRequest): AuthorizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthorizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizationRequest;
  static deserializeBinaryFromReader(message: AuthorizationRequest, reader: jspb.BinaryReader): AuthorizationRequest;
}

export namespace AuthorizationRequest {
  export type AsObject = {
    account: string,
    password: string,
  }
}

export class AuthorizationResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizationResponse): AuthorizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthorizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizationResponse;
  static deserializeBinaryFromReader(message: AuthorizationResponse, reader: jspb.BinaryReader): AuthorizationResponse;
}

export namespace AuthorizationResponse {
  export type AsObject = {
    token: string,
  }
}

export class UnAuthRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnAuthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnAuthRequest): UnAuthRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnAuthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnAuthRequest;
  static deserializeBinaryFromReader(message: UnAuthRequest, reader: jspb.BinaryReader): UnAuthRequest;
}

export namespace UnAuthRequest {
  export type AsObject = {
  }
}

export class UnAuthResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnAuthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnAuthResponse): UnAuthResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnAuthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnAuthResponse;
  static deserializeBinaryFromReader(message: UnAuthResponse, reader: jspb.BinaryReader): UnAuthResponse;
}

export namespace UnAuthResponse {
  export type AsObject = {
  }
}

export class HitResult extends jspb.Message {
  getFeatureKey(): string;
  setFeatureKey(value: string): void;

  getScore(): number;
  setScore(value: number): void;

  getPersonnelLevel(): PersonnelLevel;
  setPersonnelLevel(value: PersonnelLevel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HitResult.AsObject;
  static toObject(includeInstance: boolean, msg: HitResult): HitResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HitResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HitResult;
  static deserializeBinaryFromReader(message: HitResult, reader: jspb.BinaryReader): HitResult;
}

export namespace HitResult {
  export type AsObject = {
    featureKey: string,
    score: number,
    personnelLevel: PersonnelLevel,
  }
}

export class Vertice extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vertice.AsObject;
  static toObject(includeInstance: boolean, msg: Vertice): Vertice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Vertice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vertice;
  static deserializeBinaryFromReader(message: Vertice, reader: jspb.BinaryReader): Vertice;
}

export namespace Vertice {
  export type AsObject = {
    x: number,
    y: number,
  }
}

export class FaceBounding extends jspb.Message {
  hasTopLeft(): boolean;
  clearTopLeft(): void;
  getTopLeft(): Vertice | undefined;
  setTopLeft(value?: Vertice): void;

  hasBottomRight(): boolean;
  clearBottomRight(): void;
  getBottomRight(): Vertice | undefined;
  setBottomRight(value?: Vertice): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceBounding.AsObject;
  static toObject(includeInstance: boolean, msg: FaceBounding): FaceBounding.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FaceBounding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceBounding;
  static deserializeBinaryFromReader(message: FaceBounding, reader: jspb.BinaryReader): FaceBounding;
}

export namespace FaceBounding {
  export type AsObject = {
    topLeft?: Vertice.AsObject,
    bottomRight?: Vertice.AsObject,
  }
}

export class AlertCompareRequest extends jspb.Message {
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

  getImageSource(): ImageSource;
  setImageSource(value: ImageSource): void;

  hasCapturedTime(): boolean;
  clearCapturedTime(): void;
  getCapturedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCapturedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCapturedImage(): Uint8Array | string;
  getCapturedImage_asU8(): Uint8Array;
  getCapturedImage_asB64(): string;
  setCapturedImage(value: Uint8Array | string): void;

  getPanoramicImage(): Uint8Array | string;
  getPanoramicImage_asU8(): Uint8Array;
  getPanoramicImage_asB64(): string;
  setPanoramicImage(value: Uint8Array | string): void;

  getImageId(): string;
  setImageId(value: string): void;

  getUploadImage(): Uint8Array | string;
  getUploadImage_asU8(): Uint8Array;
  getUploadImage_asB64(): string;
  setUploadImage(value: Uint8Array | string): void;

  hasFaceBounding(): boolean;
  clearFaceBounding(): void;
  getFaceBounding(): FaceBounding | undefined;
  setFaceBounding(value?: FaceBounding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlertCompareRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AlertCompareRequest): AlertCompareRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AlertCompareRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlertCompareRequest;
  static deserializeBinaryFromReader(message: AlertCompareRequest, reader: jspb.BinaryReader): AlertCompareRequest;
}

export namespace AlertCompareRequest {
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
    imageSource: ImageSource,
    capturedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    capturedImage?: Uint8Array | string,
    panoramicImage?: Uint8Array | string,
    imageId?: string,
    uploadImage?: Uint8Array | string,
    faceBounding?: FaceBounding.AsObject,
  }
}

export class AlertCompareResponse extends jspb.Message {
  getImageId(): string;
  setImageId(value: string): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): HitResult | undefined;
  setResult(value?: HitResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlertCompareResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AlertCompareResponse): AlertCompareResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AlertCompareResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlertCompareResponse;
  static deserializeBinaryFromReader(message: AlertCompareResponse, reader: jspb.BinaryReader): AlertCompareResponse;
}

export namespace AlertCompareResponse {
  export type AsObject = {
    imageId: string,
    result?: HitResult.AsObject,
  }
}

export class HitIdentityInfo extends jspb.Message {
  getFeatureKey(): string;
  setFeatureKey(value: string): void;

  getPersonnelLevel(): PersonnelLevel;
  setPersonnelLevel(value: PersonnelLevel): void;

  getPersonnelKind(): string;
  setPersonnelKind(value: string): void;

  getName(): string;
  setName(value: string): void;

  getIdcard(): string;
  setIdcard(value: string): void;

  getBirthday(): string;
  setBirthday(value: string): void;

  getSex(): string;
  setSex(value: string): void;

  getNation(): string;
  setNation(value: string): void;

  getAddrPermanent(): string;
  setAddrPermanent(value: string): void;

  getAddrResident(): string;
  setAddrResident(value: string): void;

  getControlReason(): string;
  setControlReason(value: string): void;

  getControlUnitCode(): string;
  setControlUnitCode(value: string): void;

  getControlUnitName(): string;
  setControlUnitName(value: string): void;

  getPoliceName(): string;
  setPoliceName(value: string): void;

  getPoliceTelephone(): string;
  setPoliceTelephone(value: string): void;

  getRegistrationUnitCode(): string;
  setRegistrationUnitCode(value: string): void;

  getRegistrationUnitName(): string;
  setRegistrationUnitName(value: string): void;

  getRegistrationPersonName(): string;
  setRegistrationPersonName(value: string): void;

  hasRegistrationTime(): boolean;
  clearRegistrationTime(): void;
  getRegistrationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRegistrationTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getIdcardImageUrl(): string;
  setIdcardImageUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HitIdentityInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HitIdentityInfo): HitIdentityInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HitIdentityInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HitIdentityInfo;
  static deserializeBinaryFromReader(message: HitIdentityInfo, reader: jspb.BinaryReader): HitIdentityInfo;
}

export namespace HitIdentityInfo {
  export type AsObject = {
    featureKey: string,
    personnelLevel: PersonnelLevel,
    personnelKind: string,
    name: string,
    idcard: string,
    birthday: string,
    sex: string,
    nation: string,
    addrPermanent: string,
    addrResident: string,
    controlReason: string,
    controlUnitCode: string,
    controlUnitName: string,
    policeName: string,
    policeTelephone: string,
    registrationUnitCode: string,
    registrationUnitName: string,
    registrationPersonName: string,
    registrationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    idcardImageUrl: string,
  }
}

export class AlertCompareInfo extends jspb.Message {
  getImageId(): string;
  setImageId(value: string): void;

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

  getImageSource(): ImageSource;
  setImageSource(value: ImageSource): void;

  getCapturedImageUrl(): string;
  setCapturedImageUrl(value: string): void;

  getPanoramicImageUrl(): string;
  setPanoramicImageUrl(value: string): void;

  hasCapturedTime(): boolean;
  clearCapturedTime(): void;
  getCapturedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCapturedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCreatedTime(): boolean;
  clearCreatedTime(): void;
  getCreatedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getIsAlert(): ProcessStatus;
  setIsAlert(value: ProcessStatus): void;

  getIsProcessed(): ProcessStatus;
  setIsProcessed(value: ProcessStatus): void;

  hasHitResult(): boolean;
  clearHitResult(): void;
  getHitResult(): HitResult | undefined;
  setHitResult(value?: HitResult): void;

  hasHitIdentityInfo(): boolean;
  clearHitIdentityInfo(): void;
  getHitIdentityInfo(): HitIdentityInfo | undefined;
  setHitIdentityInfo(value?: HitIdentityInfo): void;

  getIdentityVerifyStatus(): IdentityVerifyProcessStatus;
  setIdentityVerifyStatus(value: IdentityVerifyProcessStatus): void;

  hasSimilarIdentityInfo(): boolean;
  clearSimilarIdentityInfo(): void;
  getSimilarIdentityInfo(): IdentityVerifyInfo | undefined;
  setSimilarIdentityInfo(value?: IdentityVerifyInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlertCompareInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AlertCompareInfo): AlertCompareInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AlertCompareInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlertCompareInfo;
  static deserializeBinaryFromReader(message: AlertCompareInfo, reader: jspb.BinaryReader): AlertCompareInfo;
}

export namespace AlertCompareInfo {
  export type AsObject = {
    imageId: string,
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
    imageSource: ImageSource,
    capturedImageUrl: string,
    panoramicImageUrl: string,
    capturedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isAlert: ProcessStatus,
    isProcessed: ProcessStatus,
    hitResult?: HitResult.AsObject,
    hitIdentityInfo?: HitIdentityInfo.AsObject,
    identityVerifyStatus: IdentityVerifyProcessStatus,
    similarIdentityInfo?: IdentityVerifyInfo.AsObject,
  }
}

export class AlertCompareGetRequest extends jspb.Message {
  getImageId(): string;
  setImageId(value: string): void;

  getIsReturnHitIdentityInfo(): boolean;
  setIsReturnHitIdentityInfo(value: boolean): void;

  getIsReturnSimilarIdentityInfo(): boolean;
  setIsReturnSimilarIdentityInfo(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlertCompareGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AlertCompareGetRequest): AlertCompareGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AlertCompareGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlertCompareGetRequest;
  static deserializeBinaryFromReader(message: AlertCompareGetRequest, reader: jspb.BinaryReader): AlertCompareGetRequest;
}

export namespace AlertCompareGetRequest {
  export type AsObject = {
    imageId: string,
    isReturnHitIdentityInfo: boolean,
    isReturnSimilarIdentityInfo: boolean,
  }
}

export class AlertCompareGetResponse extends jspb.Message {
  hasAlertCompareInfo(): boolean;
  clearAlertCompareInfo(): void;
  getAlertCompareInfo(): AlertCompareInfo | undefined;
  setAlertCompareInfo(value?: AlertCompareInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlertCompareGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AlertCompareGetResponse): AlertCompareGetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AlertCompareGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlertCompareGetResponse;
  static deserializeBinaryFromReader(message: AlertCompareGetResponse, reader: jspb.BinaryReader): AlertCompareGetResponse;
}

export namespace AlertCompareGetResponse {
  export type AsObject = {
    alertCompareInfo?: AlertCompareInfo.AsObject,
  }
}

export class AlertCompareListRequest extends jspb.Message {
  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getLimit(): number;
  setLimit(value: number): void;

  getMarker(): string;
  setMarker(value: string): void;

  getDeviceId(): string;
  setDeviceId(value: string): void;

  getDeviceTag(): string;
  setDeviceTag(value: string): void;

  clearPersonnelLevelList(): void;
  getPersonnelLevelList(): Array<PersonnelLevel>;
  setPersonnelLevelList(value: Array<PersonnelLevel>): void;
  addPersonnelLevel(value: PersonnelLevel, index?: number): PersonnelLevel;

  getImageSource(): ImageSource;
  setImageSource(value: ImageSource): void;

  getIsHitOnly(): boolean;
  setIsHitOnly(value: boolean): void;

  getAlertStatus(): ProcessStatus;
  setAlertStatus(value: ProcessStatus): void;

  getProcessStatus(): ProcessStatus;
  setProcessStatus(value: ProcessStatus): void;

  getIsReturnHitIdentityInfo(): boolean;
  setIsReturnHitIdentityInfo(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlertCompareListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AlertCompareListRequest): AlertCompareListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AlertCompareListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlertCompareListRequest;
  static deserializeBinaryFromReader(message: AlertCompareListRequest, reader: jspb.BinaryReader): AlertCompareListRequest;
}

export namespace AlertCompareListRequest {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    limit: number,
    marker: string,
    deviceId: string,
    deviceTag: string,
    personnelLevelList: Array<PersonnelLevel>,
    imageSource: ImageSource,
    isHitOnly: boolean,
    alertStatus: ProcessStatus,
    processStatus: ProcessStatus,
    isReturnHitIdentityInfo: boolean,
  }
}

export class AlertCompareListResponse extends jspb.Message {
  clearAlertCompareInfosList(): void;
  getAlertCompareInfosList(): Array<AlertCompareInfo>;
  setAlertCompareInfosList(value: Array<AlertCompareInfo>): void;
  addAlertCompareInfos(value?: AlertCompareInfo, index?: number): AlertCompareInfo;

  getNextMarker(): string;
  setNextMarker(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlertCompareListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AlertCompareListResponse): AlertCompareListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AlertCompareListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlertCompareListResponse;
  static deserializeBinaryFromReader(message: AlertCompareListResponse, reader: jspb.BinaryReader): AlertCompareListResponse;
}

export namespace AlertCompareListResponse {
  export type AsObject = {
    alertCompareInfosList: Array<AlertCompareInfo.AsObject>,
    nextMarker: string,
  }
}

export class Identity extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getIdcard(): string;
  setIdcard(value: string): void;

  getSex(): string;
  setSex(value: string): void;

  getBirthday(): string;
  setBirthday(value: string): void;

  getNation(): string;
  setNation(value: string): void;

  getAddrCode(): string;
  setAddrCode(value: string): void;

  getAddrDetail(): string;
  setAddrDetail(value: string): void;

  getScore(): number;
  setScore(value: number): void;

  getIdcardImageUrl(): string;
  setIdcardImageUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Identity.AsObject;
  static toObject(includeInstance: boolean, msg: Identity): Identity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Identity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Identity;
  static deserializeBinaryFromReader(message: Identity, reader: jspb.BinaryReader): Identity;
}

export namespace Identity {
  export type AsObject = {
    name: string,
    idcard: string,
    sex: string,
    birthday: string,
    nation: string,
    addrCode: string,
    addrDetail: string,
    score: number,
    idcardImageUrl: string,
  }
}

export class IdentityVerifyInfo extends jspb.Message {
  getImageId(): string;
  setImageId(value: string): void;

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

  getImageSource(): ImageSource;
  setImageSource(value: ImageSource): void;

  getCapturedImageUrl(): string;
  setCapturedImageUrl(value: string): void;

  hasReqSaveTime(): boolean;
  clearReqSaveTime(): void;
  getReqSaveTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReqSaveTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasReqSendTime(): boolean;
  clearReqSendTime(): void;
  getReqSendTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReqSendTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getReqSendErrInfo(): string;
  setReqSendErrInfo(value: string): void;

  hasResRecvTime(): boolean;
  clearResRecvTime(): void;
  getResRecvTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setResRecvTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getResRecvErrInfo(): string;
  setResRecvErrInfo(value: string): void;

  getIdentityConut(): number;
  setIdentityConut(value: number): void;

  getStatus(): IdentityVerifyProcessStatus;
  setStatus(value: IdentityVerifyProcessStatus): void;

  clearIdentitiesList(): void;
  getIdentitiesList(): Array<Identity>;
  setIdentitiesList(value: Array<Identity>): void;
  addIdentities(value?: Identity, index?: number): Identity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentityVerifyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: IdentityVerifyInfo): IdentityVerifyInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdentityVerifyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentityVerifyInfo;
  static deserializeBinaryFromReader(message: IdentityVerifyInfo, reader: jspb.BinaryReader): IdentityVerifyInfo;
}

export namespace IdentityVerifyInfo {
  export type AsObject = {
    imageId: string,
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
    imageSource: ImageSource,
    capturedImageUrl: string,
    reqSaveTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    reqSendTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    reqSendErrInfo: string,
    resRecvTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    resRecvErrInfo: string,
    identityConut: number,
    status: IdentityVerifyProcessStatus,
    identitiesList: Array<Identity.AsObject>,
  }
}

export class IdentityVerifyRequest extends jspb.Message {
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

  getImageSource(): ImageSource;
  setImageSource(value: ImageSource): void;

  getImageId(): string;
  setImageId(value: string): void;

  getUploadImage(): Uint8Array | string;
  getUploadImage_asU8(): Uint8Array;
  getUploadImage_asB64(): string;
  setUploadImage(value: Uint8Array | string): void;

  hasFaceBounding(): boolean;
  clearFaceBounding(): void;
  getFaceBounding(): FaceBounding | undefined;
  setFaceBounding(value?: FaceBounding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentityVerifyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IdentityVerifyRequest): IdentityVerifyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdentityVerifyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentityVerifyRequest;
  static deserializeBinaryFromReader(message: IdentityVerifyRequest, reader: jspb.BinaryReader): IdentityVerifyRequest;
}

export namespace IdentityVerifyRequest {
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
    imageSource: ImageSource,
    imageId?: string,
    uploadImage?: Uint8Array | string,
    faceBounding?: FaceBounding.AsObject,
  }
}

export class IdentityVerifyResponse extends jspb.Message {
  getImageId(): string;
  setImageId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentityVerifyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IdentityVerifyResponse): IdentityVerifyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdentityVerifyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentityVerifyResponse;
  static deserializeBinaryFromReader(message: IdentityVerifyResponse, reader: jspb.BinaryReader): IdentityVerifyResponse;
}

export namespace IdentityVerifyResponse {
  export type AsObject = {
    imageId: string,
  }
}

export class IdentityVerifyGetRequest extends jspb.Message {
  getImageId(): string;
  setImageId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentityVerifyGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IdentityVerifyGetRequest): IdentityVerifyGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdentityVerifyGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentityVerifyGetRequest;
  static deserializeBinaryFromReader(message: IdentityVerifyGetRequest, reader: jspb.BinaryReader): IdentityVerifyGetRequest;
}

export namespace IdentityVerifyGetRequest {
  export type AsObject = {
    imageId: string,
  }
}

export class IdentityVerifyGetResponse extends jspb.Message {
  hasIdentityVerifyInfo(): boolean;
  clearIdentityVerifyInfo(): void;
  getIdentityVerifyInfo(): IdentityVerifyInfo | undefined;
  setIdentityVerifyInfo(value?: IdentityVerifyInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentityVerifyGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IdentityVerifyGetResponse): IdentityVerifyGetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdentityVerifyGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentityVerifyGetResponse;
  static deserializeBinaryFromReader(message: IdentityVerifyGetResponse, reader: jspb.BinaryReader): IdentityVerifyGetResponse;
}

export namespace IdentityVerifyGetResponse {
  export type AsObject = {
    identityVerifyInfo?: IdentityVerifyInfo.AsObject,
  }
}

export class IdentityVerifyListRequest extends jspb.Message {
  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getLimit(): number;
  setLimit(value: number): void;

  getMarker(): string;
  setMarker(value: string): void;

  getDeviceId(): string;
  setDeviceId(value: string): void;

  getDeviceTag(): string;
  setDeviceTag(value: string): void;

  getImageSource(): ImageSource;
  setImageSource(value: ImageSource): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentityVerifyListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IdentityVerifyListRequest): IdentityVerifyListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdentityVerifyListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentityVerifyListRequest;
  static deserializeBinaryFromReader(message: IdentityVerifyListRequest, reader: jspb.BinaryReader): IdentityVerifyListRequest;
}

export namespace IdentityVerifyListRequest {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    limit: number,
    marker: string,
    deviceId: string,
    deviceTag: string,
    imageSource: ImageSource,
  }
}

export class IdentityVerifyListResponse extends jspb.Message {
  clearIdentityVerifyInfosList(): void;
  getIdentityVerifyInfosList(): Array<IdentityVerifyInfo>;
  setIdentityVerifyInfosList(value: Array<IdentityVerifyInfo>): void;
  addIdentityVerifyInfos(value?: IdentityVerifyInfo, index?: number): IdentityVerifyInfo;

  getNextMarker(): string;
  setNextMarker(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentityVerifyListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IdentityVerifyListResponse): IdentityVerifyListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdentityVerifyListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentityVerifyListResponse;
  static deserializeBinaryFromReader(message: IdentityVerifyListResponse, reader: jspb.BinaryReader): IdentityVerifyListResponse;
}

export namespace IdentityVerifyListResponse {
  export type AsObject = {
    identityVerifyInfosList: Array<IdentityVerifyInfo.AsObject>,
    nextMarker: string,
  }
}

export enum PersonnelLevel {
  PERSONNEL_LEVEL_UNKNOWN = 0,
  PERSONNEL_LEVEL_RED = 1,
  PERSONNEL_LEVEL_ORANGE = 2,
  PERSONNEL_LEVEL_YELLOW = 3,
  PERSONNEL_LEVEL_OTHER = 4,
}

export enum ImageSource {
  IMAGE_SOURCE_UNKNOWN = 0,
  IMAGE_SOURCE_CAPTURE = 1,
  IMAGE_SOURCE_LIVENESS = 2,
  IMAGE_SOURCE_UPLOAD = 3,
}

export enum ProcessStatus {
  PROCESS_STATUS_UNKNOWN = 0,
  PROCESS_STATUS_FALSE = 1,
  PROCESS_STATUS_TRUE = 2,
  PROCESS_STATUS_ALL = 100,
}

export enum IdentityVerifyProcessStatus {
  IDENTITY_VERIFY_PROCESS_STATUS_UNKNOWN = 0,
  IDENTITY_VERIFY_PROCESS_STATUS_REQUEST_SAVE = 1,
  IDENTITY_VERIFY_PROCESS_STATUS_REQUEST_SEND = 2,
  IDENTITY_VERIFY_PROCESS_STATUS_REQUEST_ERROR = 3,
  IDENTITY_VERIFY_PROCESS_STATUS_RESULT_ERROR = 4,
  IDENTITY_VERIFY_PROCESS_STATUS_RESULT_NO_IDENTITY = 5,
  IDENTITY_VERIFY_PROCESS_STATUS_RESULT_IDENTITIES = 6,
  IDENTITY_VERIFY_PROCESS_STATUS_ALL = 100,
}

