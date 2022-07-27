import JSEncrypt from "jsencrypt/bin/jsencrypt.min";

// 密钥对生成 http://web.chacuo.net/netrsakeypair

const publicKey =
"MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMuvYGy/Np27zJupXKUTAB8rZiZlakHs\n"+
"1LlAFwCNfyB7q1Q0ycQ5MIhfk51cuv656TtvbjuVMfiGNbGX+MoYgvUCAwEAAQ==";

const privateKey =
"MIICxjBABgkqhkiG9w0BBQ0wMzAbBgkqhkiG9w0BBQwwDgQIHl1Tu0/F/4MCAggA\n" +
        "MBQGCCqGSIb3DQMHBAhYSCw5A/QnAwSCAoDEN+y+tyghkMHbWWFlMoQu+wfPkD4+\n" +
        "TjvRH5RhoCEvBEx/F8sQaLzsKN7G6PJS3an6hB5qqNJVSrzn8keCI5yLipXxxcue\n" +
        "pA1GwJy5mEyGup29gCMDtvX6tSLYB1EADOe2ozxk5934BTlUy1iBuRB70ZZRS0Mq\n" +
        "hriafBbWT/p6Pe6oQwe2k4FqtnJauOhj0fQoyXkYVZr7hFQi4l6TuCu9NwviiqPs\n" +
        "lXr/RO3s/yYeT9PyGfE9aSKI5wMpYSayOIEHXfwuMDHJUyne+5R/Jiilhon1LW0M\n" +
        "HyO9dsBBGmWrzoViSZtqKLuYP/+UxFfDls4qtMwZCDQ3k3rJSqv0LY3XRLAXICCi\n" +
        "dM+nTFV9idw9BqcMNGrUbYYvyqJ0HtajWNFAUaeQ4fX+aO1wnBD7dO3p+DyNMM1n\n" +
        "B9Q4aQ0hlRJ5IdxWTH41ASPDi6j+sbwh+rF0YfHJQ500G/A4kDetyAQgBOHDt5mY\n" +
        "vw3+MjImYdkE452Yspf2uKzUYVSi6uLcLCbxS0S3UZ1JFp7M/dc/bfRZIxqqgNqT\n" +
        "lWinDQR7h9lHi5VurR1nqpH0pdTezMnvgAKSUrYPluJbC19f4xjo1IXrRHOcfYZ9\n" +
        "V2jHCVwq25+Qg62qgPAvbPU4YTGvB0hzPxmROam6uuX/U86TCjK+GCYBXTAci2gJ\n" +
        "DNsLtqJ+brf4bVxsrgsATeWFs7VH4Mp8PC4oH14RFU/u5v6QQz2AGf3dT2DVHt9y\n" +
        "acqai89SuEUm/0+nyHvW+zgyGQHxYiXZCHkXw+PQumGEafmJWXRvptrg9wZveHEK\n" +
        "+whDCru8WuekFQSYhfGWzNwU7phWZkakCAef1HHCVTGuKz58l85N0fGf";

// 加密
export function encrypt(txt) {
  const encryptor = new JSEncrypt();
  encryptor.setPublicKey(publicKey); // 设置公钥
  return encryptor.encrypt(txt); // 对数据进行加密
}

// 解密
export function decrypt(txt) {
  const encryptor = new JSEncrypt();
  encryptor.setPrivateKey(privateKey); // 设置私钥
  return encryptor.decrypt(txt); // 对数据进行解密
}
