public class SinglyLinkedList {
    Node head; // header pointer

    // constructor for the singly linked list
    public SinglyLinkedList() {
        this.head=null;
    }

    // method to insert node at beginning
    public void addBegin(int data) {
        Node ptr=new Node(data);
        ptr.next=head;
        head=ptr;
    }

    // method to display the node elements
    public void display() {
        if(head==null) {
            System.out.println("Empty list");
            return;
        }
        for(Node ptr=head; ptr!=null; ptr=ptr.next) {
            System.out.print(ptr.data + " ");
        }
        System.out.println();
    }
}