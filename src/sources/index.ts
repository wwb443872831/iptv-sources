export * from "./epg_pw"
export * from "./iptv_org"
export * from "./yang_m3u"
export * from "./yuechan_live"
export * from "./fanmingming_live"
export * from "./utils"

import {
    epg_pw_sources,
    iptv_org_sources,
    iptv_org_stream_sources,
    yang_m3u_sources,
    yuechan_live_sources,
    fanmingming_live_sources,
    with_github_raw_url_proxy,
} from "."

export const sources = [
    ...fanmingming_live_sources.map((s) => ({
        ...s,
        url: with_github_raw_url_proxy(s.url),
    })),
    ...iptv_org_sources.map((s) => ({
        ...s,
        url: with_github_raw_url_proxy(s.url),
    })),
    ...iptv_org_stream_sources.map((s) => ({
        ...s,
        url: with_github_raw_url_proxy(s.url),
    })),
    ...epg_pw_sources,
    ...yuechan_live_sources.map((s) => ({
        ...s,
        url: with_github_raw_url_proxy(s.url),
    })),
    ...yang_m3u_sources.map((s) => ({
        ...s,
        url: with_github_raw_url_proxy(s.url),
    })),
]