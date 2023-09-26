import type { Meta, StoryObj } from "@storybook/svelte"
import { TEST_STRING } from "./TEST_STRING"
import { expect, jest } from "@storybook/jest"
import { userEvent, within } from "@storybook/testing-library"

import Button from "./ButtonStory.svelte"

const meta = {
    title: "Components/Button",
    component: Button,
    argTypes: {
        label: { control: "text" },
    },
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=15-315&t=Pofe34gwwmhKjJgw-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=15%3A315",
        },
    },
} satisfies Meta<Button>

export default meta
type Story = StoryObj<typeof meta>

export const Story1: Story = {
    args: {
        label: "click me",
    },
    name: "Default Story",
}

export const Story2: Story = {
    args: {
        label: "on:click me daddy",
    },
    name: "on:click",
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=15-359&t=9FjMzztWiJvRJ6oM-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=15%3A359",
        },
    },
    play: async ({ canvasElement }) => {
        console.log = jest.fn()
        const canvas = within(canvasElement)
        const button = await canvas.getByRole("button")
        await userEvent.click(button)
        await expect(console.log).toHaveBeenCalledWith(TEST_STRING)
    },
}
