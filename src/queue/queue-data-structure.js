class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    return this.queueControl.length !== this.MAX_SIZE;
  }

  isEmpty() {
    return this.queueControl.length === 0;
  }

  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.push(item);
      return this.queueControl;
    } else {
      throw new Error("QUEUE_OVERFLOW");
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("QUEUE_UNDERFLOW");
    } else {
      return this.queueControl.splice(0, 1)[0];
    }
  }

  display() {
    return this.queueControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== "undefined") module.exports = Queue;
