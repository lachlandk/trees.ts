import { BinaryTree } from "../dist/trees.js";
import { suite, test } from "mocha";
import assert from "assert";

suite("Testing BinaryTree insert method", function() {
	const tree = new BinaryTree();

	test("Insert into an empty tree", function() {
		tree.insert(2);
		assert.strictEqual(tree.root.data, 2);
	});

	test("Insert into the left side", function() {
		tree.insert(1);
		assert.strictEqual(tree.root.left.data, 1);
	});

	test("Insert into the right side", function() {
		tree.insert(3);
		assert.strictEqual(tree.root.right.data, 3);
	});
});
