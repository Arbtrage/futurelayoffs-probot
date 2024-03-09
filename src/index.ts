import { Probot } from "probot";
import { processIssue } from "./utils/process_issue";


export = (app: Probot) => {
  
  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    await context.octokit.issues.createComment(issueComment);
  });

  app.on("issue_comment.created", async (context) => {
    try {
      const process = await processIssue(context.payload);
      if(process.status!==200) {
        throw process.message
      }
      const issueComment = context.issue({
        body: "Bounty has been created !!",
      })
      await context.octokit.issues.createComment(issueComment);
    } catch (error) {
      console.log("Bot will not run !!!");
      console.log("Error:", error);
    }
    return true;
  });
};
