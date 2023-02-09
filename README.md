# WTF is a wallet?

This repository holds the code for the workshop given in the Berlin Build Station hosted by Superteam Germany. It's used as a guide to navigate the code. In this workshop, the attendees will learn about cryptography, how's it used today and how it relates to wallets. At the same time, we'll explore these concepts with practical examples.

Some of the questions that will be answered during the workshop:

- What's cryptography?
- How does blockchain use cryptography?
- What's a wallet and how it relates to cryptography?
- What's a cryptocurrency?

The practical example will be to create our own wallet from scratch, this wallet has the peculiarity of being local and the interface is a command-line. It will let us create multiple accounts, sign messages and transfering SOL.

## Requirements

In order to follow this workshop, you'll need Node v18 installed in your computer.

## Implementation

The implementation of something like this involves several moving pieces.

- Generating a keypair and storing it encrypted in a USB stick.
- Listing all the available keypairs in the USB stick.
- Get the public key of a keypair from the USB stick.
- Sign a message using one of the keypairs in the USB stick.
- Verify a signature.
- Transfer SOL.
