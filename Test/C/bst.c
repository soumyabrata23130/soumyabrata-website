#include <stdio.h>
#include <stdlib.h>

typedef struct nodeType {
    int data;
    struct nodeType *left, *right;
} Node;

Node *create(int n) {
    Node *temp=malloc(sizeof(Node));
    if(temp==NULL) {
        printf("Unable to allocate memory");
        exit(1);
    }
    temp->data=n;
    temp->left=temp->right=NULL;
    return temp;
}

Node *insert(Node *root, int n) {
    if(root==NULL) return create(n);
    Node *temp=root, *parent=NULL;
    while(temp!=NULL) {
        parent=temp;
        if(n<temp->data) {
            temp=temp->left;
        } else if(n>temp->data) {
            temp=temp->right;
        } else {
            return root;
        }
    }
    if(n<parent->data) {
        parent->left=create(n);
    } else {
        parent->right=create(n);
    }
    return root;
}

void inOrder(Node *root) {
    if(root==NULL) return;
    inOrder(root->left);
    printf("%d ", root->data);
    inOrder(root->right);
}

int main() {
    Node *root=NULL;
    root=insert(root, 50);
    root=insert(root, 40);
    root=insert(root, 30);
    root=insert(root, 20);
    root=insert(root, 60);
    root=insert(root, 70);
    root=insert(root, 80);
    inOrder(root);
    return 0;
}