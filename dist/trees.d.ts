export declare class BinaryTreeNode {
    data: unknown;
    left: BinaryTreeNode | null;
    right: BinaryTreeNode | null;
    constructor(data: unknown);
}
export declare class BinaryTree {
    root: BinaryTreeNode | null;
    order: ((data1: unknown, data2: unknown) => boolean);
    insert(data: unknown): void;
    insertNode(node: BinaryTreeNode, newNode: BinaryTreeNode): void;
}
