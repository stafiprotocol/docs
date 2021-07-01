`review后修改建议(given by tpkeeper)`
1. execTransaction:
    1. 如果有恶意者故意修改参数txHash，还是会导致多签交易多次执行，建议对 txhash 校验或者在合约中生成 hash

2. ModuleManager:
    1. 暂时没看懂 ModuleManager 的作用

3. 合约大小优化:
    1. nonce 可设置为 public，移除 getNonce()。
