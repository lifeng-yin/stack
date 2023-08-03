/**
 * @classdesc Node containing value and next pointer, used in linked-list-based data structures.
 */
class Node {
    data: any
    next: Node | null
    constructor(data: any, next?: Node) {
        this.data = data
        this.next = next ?? null
    }
}


/**
 * @classdesc Linked-list style implementation of a stack data structure in Javascript.
 */
export default class Stack {
    #length: number = 0
    #top: Node | null = null
  
    /**
     * Pushes an item onto the top of the stack.
     * @param {*} item The item to be pushed onto the stack.
     * @return {number} The new length of the stack.
     */
    push(item: any): number {
      this.#top = {
        data: item,
        next: this.#top
      }
      this.#length += 1
      return this.#length
    }
  
    /**
     * Removes the item at the top of the stack.
     * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
     */
    pop(): any {
      if (this.#top === null) return undefined

      this.#top = this.#top.next
      this.#length -= 1
      return this.#top
    }
  
    /**
     * Determines if the stack is empty.
     * @return {boolean} `true` if the stack has no items, `false` otherwise.
     */
    isEmpty(): boolean {
      return this.#top === null
    }
  
    /**
     * Returns the item at the top of the stack without removing it from the stack.
     * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
     */
    peek(): any {
      return this.#top?.data
    }
  
    /**
     * Returns the number of items in the stack.
     * @return {number} The number of items in the stack.
     */
    length(): number {
      return this.#length
    }

    /**
     * Removes all elements from the stack.
     */
    clear(): void {
        this.#length = 0
        this.#top = null
    }

    copy(): Stack {
      const newStack = new Stack();
      const tempArray = []

      let current = this.#top;
      while (current !== null) {
        tempArray.unshift(current.data)
        current = current.next;
      }

      tempArray.forEach(v => newStack.push(v))

      return newStack;
    }

    toArray(): any[] {
      const array: any[] = Array(this.#length)

      let current = this.#top
      while (current !== null) {
        array.unshift(current.data)
        current = current.next
      }

      return array
    }
}