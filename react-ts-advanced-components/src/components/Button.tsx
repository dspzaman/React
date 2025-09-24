import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
    el: 'button';
} & ComponentPropsWithoutRef<'button'>;

type AnchorProps = {
    el: 'Anchor';
} & ComponentPropsWithoutRef<'a'>;

export default function Button(props: ButtonProps | AnchorProps) {
    // const {el, ...otherProps} = props;
    if (props.el === 'Anchor') {
        return (
            <p>
                <a {...props}></a>
            </p>
        )
    }

    return (
        <p>
        <button {...props}></button>
        </p>
    )
}