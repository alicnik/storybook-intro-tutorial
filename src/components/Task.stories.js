import * as React from "react"
import Task from "./Task"

export default { component: Task, title: "Task" }

const Template = (args) => <Task {...args} />

export const Default = Template.bind({})
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
}

export const Pinned = Template.bind({})
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
}

export const Archived = Template.bind({})
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
}

export const LongTitle = Template.bing({})
LongTitle.args = {
  task: {
    ...Default.args.task,
    title:
      "Hey look! This is a really long title and we are using this to see if the text overflow ellipsis works as we would hope. This ensures that we can implement a regression test. Is it a visual regression test? Maybe, we'll see!",
  },
}
