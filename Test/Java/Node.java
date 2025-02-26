public class Node {
    int data, data1, data2; // data
    Node prev, next; // pointers to linked nodes

    // constructor for the node with single data
    public Node(int data) {
        this.data=data;
        this.prev=null;
        this.next=null;
    }

    // constructor for the node with two data
    public Node(int data1, int data2) {
        this.data1=data1;
        this.data2=data2;
        this.prev=null;
        this.next=null;
    }
}