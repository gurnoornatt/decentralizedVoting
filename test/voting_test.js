const Voting = artifacts.require("Voting");

contract("Voting", accounts => {
    it("should initialize with three proposals", async () => {
        const votingInstance = await Voting.deployed();
        const proposalCount = await votingInstance.getProposals.call();
        assert.equal(proposalCount.length, 3, "There should be three proposals initially");
    });

    it("should allow voting and record the vote", async () => {
        const votingInstance = await Voting.deployed();
        await votingInstance.vote(0, { from: accounts[0] });
        const proposal = await votingInstance.getProposal(0);
        assert.equal(proposal.voteCount, 1, "The first proposal should have one vote");
    });

    it("should not allow double voting", async () => {
        const votingInstance = await Voting.deployed();
        try {
            await votingInstance.vote(0, { from: accounts[0] });
            assert.fail("Expected error not received");
        } catch (error) {
            assert.include(error.message, "revert", "Expected revert error");
        }
    });
});
