import { EventEmitter } from "events";

class API extends EventEmitter {
  constructor() {
    super();
    this.lastRpcId = 0;
    this.rpcPromises = {};
    this.onMessage = this.onMessage.bind(this);
    //this.ws = new WebSocket('wss://api.robodex.io');
    this.ws = new WebSocket('ws://localhost:9000');
    this.ws.onmessage = this.onMessage;

    this.ws.onopen = () => {

    }
  }

  onMessage(msg) {
    msg = JSON.parse(msg.data);
    if (msg.stream) {
      return this.handleStream(msg);
    }
    if (msg.event) {
      return this.handleEvent(msg);
    }
    if (msg.jsonrpc === '2.0') {
      return this.handleJSONRPC(msg);
    }
  }

  handleStream(msg) {
    this.emit('stream', msg);
  }

  handleEvent(msg) {
    this.emit('event', msg);
  }

  // JSONRPC

  handleJSONRPC(msg) {
    console.log('HANDLE JSONRPC');
    console.log(msg);
    if (msg.id) {
      const promise = this.rpcPromises[msg.id];
      if (promise) {
        delete this.rpcPromises[msg.id];
        if (msg.result) {
          promise.resolve(msg.result);
        }
        if (msg.error) {
          promise.reject(msg.error);
        }
      }
    }
  }

  nextRpcId() {
    this.lastRpcId++;
    return this.lastRpcId;
  }

  sendJSONRPC(method, params) {
    if (this.ws.readyState !== WebSocket.OPEN) {
      return Promise.reject();
    }

    const id = this.nextRpcId();
    this.ws.send(JSON.stringify({
      jsonrpc: '2.0',
      method: method,
      params: params,
      id
    }));
    return new Promise((resolve, reject) => {
      this.rpcPromises[id] = {
        resolve,
        reject
      }
    })
  }

  // RPC

  lastTrades() {
    return this.sendJSONRPC('lasttrades');
  }
}

export default API;
