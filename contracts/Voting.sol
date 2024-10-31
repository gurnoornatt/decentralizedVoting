// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Proposal {
        string description;
        uint voteCount;
    }

    address public owner;
    mapping(address => bool) public hasVoted;
    Proposal[] public proposals;

    constructor(string[] memory proposalNames) {
        owner = msg.sender;
        for (uint i = 0; i < proposalNames.length; i++) {
            proposals.push(
                Proposal({description: proposalNames[i], voteCount: 0})
            );
        }
    }

    function vote(uint proposalIndex) public {
        require(!hasVoted[msg.sender], "You have already voted.");
        require(proposalIndex < proposals.length, "Invalid proposal.");

        proposals[proposalIndex].voteCount += 1;
        hasVoted[msg.sender] = true;
    }

    function getProposal(
        uint proposalIndex
    ) public view returns (string memory description, uint voteCount) {
        require(proposalIndex < proposals.length, "Invalid proposal.");

        Proposal storage proposal = proposals[proposalIndex];
        return (proposal.description, proposal.voteCount);
    }

    function getProposals() public view returns (Proposal[] memory) {
        return proposals;
    }
}
