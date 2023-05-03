import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Can I do a DSCR Loan OH?",
        value: "Can I do a DSCR Loan OH?"
    },
    { text: "What is max ltv on bank statement cashout in TX?", value: "What is max ltv on bank statement cashout in TX?" },
    { text: "Who can do a banks statement loan in Alabama?", value: "Who can do a banks statement loan in Alabama?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
