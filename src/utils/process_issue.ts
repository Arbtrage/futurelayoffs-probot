import { BackendUrl } from '../../constants';
import axios from 'axios';

async function processIssue(data: any) {
    const comment: string = data.comment.body;
    if (!comment.includes("Future Layoffs")) {
        console.log("Bot will not run !!!")
        return { status: 400, message: "Bot will not run!!" };
    }

    const tags = data.issue.labels.map((tag: any) => {
        return tag.name
    })

    const regex = /\$([0-9]+)/;
    const match = data.comment.body.match(regex);
    let bountyAmount = 0;
    if (match && match[1]) {
        bountyAmount = parseInt(match[1]);
        console.log("Bounty Amount:", bountyAmount);
    } else {
        console.log("No bounty amount found.");
    }

    const payload = {
        name: data.issue.title,
        description: data.issue.body,
        tags: tags || [],
        status: data.issue.state,
        repository_url: data.repository.html_url,
        bounty: bountyAmount,
        repository_name: data.repository.full_name,
        repository_description: data.repository.description,
        license: data.repository.license,
        assignee: data.issue.assignee,
        assignees: data.issue.assignees
    }

    try {
        const res = await axios.post(BackendUrl, payload);
        return { status: 200, message: res.data };
    } catch (error) {
        console.log("Error:", error);
        return { status: 400, message: error };
    }

}

export {
    processIssue
}

