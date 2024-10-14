# EVM LSD Relay Service

Given the limitation of smart contracts, they are not self-executing, and require an external force to trigger their functions. Relay is a service to drive the network to properly process its own internal states, such as dealing with delegating, undelegating, distributing rewards and calculating the rate between LST and StakingToken. We introduce era concept to define how often the smart contract should be called. Most of the time, an era is 24 hours long.

Security is the our first priority when developing Stack, We are thrilled to say that the new era process is permissionless, showcasing the decentralized nature of the StaFi EVM LSD Stack, allowing anyone to trigger the beginning of a new era.

## Install Build Tools

Install `make`, `gcc` and `git`

```bash
sudo apt update
sudo apt install -y make gcc git build-essential
```

Install `go` by following the [official docs](https://golang.org/doc/install). Remember to set your `$PATH` environment variable, for example:

```bash
cd $HOME
wget -O go1.22.0.linux-amd64.tar.gz https://go.dev/dl/go1.22.0.linux-amd64.tar.gz
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.22.0.linux-amd64.tar.gz && rm go1.22.0.linux-amd64.tar.gz
echo 'export GOROOT=/usr/local/go' >> $HOME/.bashrc
echo 'export GOPATH=$HOME/go' >> $HOME/.bashrc
echo 'export GO111MODULE=on' >> $HOME/.bashrc
echo 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bashrc && . $HOME/.bashrc
go version
```

## Install relay service

```bash
$ git clone https://github.com/stafiprotocol/evm-lsd-relay.git
$ cd evm-lsd-relay
$ make install
```

## Add or Import account

You can import an exist account

```bash
$ evm-lsd-relay import-account 
config home: /home/ubuntu/.stafi/evm/lsd
keystore path: /home/ubuntu/.stafi/evm/lsd/keystore
Enter private key:
> 
password for key:
> 
INFO[2024-06-03T16:10:06+08:00] key imported                                  address=0xa9b8af5C53E6282fB469297091A33B08B5AC40B7 file=/home/ubuntu/.stafi/evm/lsd/keystore/0xa9b8af5C53E6282fB469297091A33B08B5AC40B7.key
```

or you can create a new account

```bash
$ evm-lsd-relay add-account 
config home: /home/ubuntu/.stafi/evm/lsd
keystore path: /home/ubuntu/.stafi/evm/lsd/keystore
password for key:
> 
INFO[2024-06-03T16:07:06+08:00] key added                                     address=0x04677765e9d5C1cc5Ad40e9AD8b56c441DdeF04C file=/home/ubuntu/.stafi/evm/lsd/keystore/0x04677765e9d5C1cc5Ad40e9AD8b56c441DdeF04C.key
```

⚠️Please make sure the account have enough gas funds, since relay will send transactions to StakeManager contract periodically.

## Start relay services

```bash
$ evm-lsd-relay start \
  --account 0xa9b8af5C53E6282fB469297091A33B08B5AC40B7 \
  --endpoint 'http://127.0.0.1:8545' \
  --stake_manager 0x64C2E857d478882B2A39eDc447b652438E96bCB8

config home: /home/ubuntu/.stafi/evm/lsd
log level: info
all logs are output in the /home/ubuntu/.stafi/evm/lsd/log_data directory
INFO[2024-06-07T09:58:38+08:00] cfg {RpcEndpoint:http://127.0.0.1:8545 Account:0xa9b8af5C53E6282fB469297091A33B08B5AC40B7 GasLimit:2000000 MaxGasPrice:600000000000 StakeMangerAddress:0x64C2E857d478882B2A39eDc447b652438E96bCB8 FactoryAddress: LogFilePath:/home/ubuntu/.stafi/evm/lsd/log_data KeystorePath:/home/ubuntu/.stafi/evm/lsd/keystore} 
Enter password for key /home/ubuntu/.stafi/evm/lsd/keystore/0xa9b8af5C53E6282fB469297091A33B08B5AC40B7.key:
> 
INFO[2024-06-07T09:58:43+08:00] task starting...                             
INFO[2024-06-07T09:58:58+08:00] start new era Handler                        
INFO[2024-06-07T09:59:19+08:00] tx already on chain                           tx=0xdc328a1e4856e1b2e69783f4be3a0e3dec1cdc17dc6b708f93648cf7a98448d0 tx success=true
INFO[2024-06-07T09:59:20+08:00] newEra 1 already executed success, new rate: 1000000000000000000, old rate: 1000000000000000000, new pool info: {pool: 0x46Dab254e585357bB3F925E2E42bEFA934F95107, era: 1, bond: 0, unbond: 0, active: 0} , old pool info: {pool: 0x46Dab254e585357bB3F925E2E42bEFA934F95107, era: 0, bond: 0, unbond: 0, active: 0}
```

## Options

| option | description | example value |
| --- | --- | --- |
| account | the account that has been added or imported | 0xa9b8af5C53E6282fB469297091A33B08B5AC40B7 |
| endpoint | RPC endpoint of the chain | http://127.0.0.1:8545 |
| stake_manager | the address of StakeManager contract | 0x64C2E857d478882B2A39eDc447b652438E96bCB8 |
| home | Home path (default "$HOME/.stafi/evm/lsd") |  |
| gas_limit | Gas limit (default "2000000") |  |
| max_gas_price | Max gas price (default "600000000000") |  |
| log_level | The logging level (trace\|debug\|info\|warn\|error\|fatal\|panic) |  info |
