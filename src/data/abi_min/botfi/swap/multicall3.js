export default ["function aggregate((address target, bytes callData)[] calls) payable returns (uint256 blockNumber, bytes[] returnData)","function aggregate3((address target, bool allowFailure, bytes callData)[] calls) payable returns ((bool success, bytes returnData)[] returnData)","function aggregate3Value((address target, bool allowFailure, uint256 value, bytes callData)[] calls) payable returns ((bool success, bytes returnData)[] returnData)","function blockAndAggregate((address target, bytes callData)[] calls) payable returns (uint256 blockNumber, bytes32 blockHash, (bool success, bytes returnData)[] returnData)","function getBasefee() view returns (uint256 basefee)","function getBlockHash(uint256 blockNumber) view returns (bytes32 blockHash)","function getBlockNumber() view returns (uint256 blockNumber)","function getChainId() view returns (uint256 chainid)","function getCurrentBlockCoinbase() view returns (address coinbase)","function getCurrentBlockDifficulty() view returns (uint256 difficulty)","function getCurrentBlockGasLimit() view returns (uint256 gaslimit)","function getCurrentBlockTimestamp() view returns (uint256 timestamp)","function getEthBalance(address addr) view returns (uint256 balance)","function getLastBlockHash() view returns (bytes32 blockHash)","function tryAggregate(bool requireSuccess, (address target, bytes callData)[] calls) payable returns ((bool success, bytes returnData)[] returnData)","function tryBlockAndAggregate(bool requireSuccess, (address target, bytes callData)[] calls) payable returns (uint256 blockNumber, bytes32 blockHash, (bool success, bytes returnData)[] returnData)"]