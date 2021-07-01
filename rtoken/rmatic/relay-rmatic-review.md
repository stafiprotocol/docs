`review后修改建议(given by tpkeeper)`
1. ResolveMessage:
    当 processXXX 返回 fasle 时，将进程 panic 有助于监控, 可参考 cosmos 中的 ResolveMessage(位于最新的 master 分支)

2. TransferVerify:
    还未添加对叔块情况的处理

3. MessageToSign:
    签名的内容有重放攻击的风险，建议对签名的内容增加 nonce、合约地址等信息，并在合约中校验签名使用的 nonce 与合约中当前的 nonce 
