import { grpc } from '@improbable-eng/grpc-web';

import { GatewayInternal, GatewayInternalClient } from '../../pb/gitlab.sz.sensetime.com/gateway/gateway-server/pb/gateway-server-internal_pb_service';
import * as GatewayPublic from '../../pb/gitlab.sz.sensetime.com/gateway/gateway-server/pb/gateway-server_pb';
import * as Gateway from '../../pb/gitlab.sz.sensetime.com/gateway/gateway-server/pb/gateway-server-internal_pb';

import Cache from '@/utils/cache';

const url = '/api';
const Service = new GatewayInternalClient(url, {
    debug: true,
    transport: (options: any) => {
        const onHeaderHook = options.onHeaders;
        options.onHeaders = (metadata: any, status: any) => {
            let duration = (Date.now() - (options as any).start) / 1000.0;

            onHeaderHook.call(options, metadata, status);
            let grpcStatusHeader = metadata.get('grpc-status') || [];
            let grpcMessageHeader = metadata.get('grpc-message') || [];
            if (status != 200) {
                console.error(`GRPC httpcode=${status} duration=${duration}s`, options.url);
            } else if (grpcStatusHeader.length > 0) {
                let grpcStatus = parseInt(grpcStatusHeader[0], 10);
                if (grpcStatus != 0) {
                    console.error(`GRPC code=${grpcStatus} duration=${duration}s`, options.url, grpcMessageHeader);
                } else {
                    console.info(`GRPC code=${grpcStatus} duration=${duration}s`, options.url);
                }
            } else {
                console.info(`GRPC duration=${duration}s`, options.url);
            }
        };

        const t = grpc.CrossBrowserHttpTransport({ withCredentials: false })(options);

        // hack default transport to inject token.
        const startHook = t.start;
        t.start = (metadata: any) => {
            const token = Cache.localGet('token');
            metadata.set('Authorization', `Bearer ${token}`);
            startHook.call(t, metadata);

            (options as any).start = Date.now();
        };
        return t;
    },
});

export {
    Service,
    Gateway,
    GatewayPublic
};
