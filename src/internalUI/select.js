import * as React from "react"

import { MultiSelector, MultiSelectorContent, MultiSelectorInput, MultiSelectorItem, MultiSelectorList, MultiSelectorTrigger } from "./multiselect"

function SelectOption({ label, options, style }) {
    return options.map(o =>
        o.options ? (
            <div style={{ marginLeft: '20px' }} key={o.value}>
                <SelectOption {...o} />
            </div>
        )
            : <MultiSelectorItem value={o.value} key={o.value}>{o.label}</MultiSelectorItem>
    )

}

export function SelectDemo({ label, options }) {
    const [value, setValue] = React.useState([]);

    return (
        <MultiSelector values={value} onValuesChange={setValue} loop className="max-w-xs">
            <MultiSelectorTrigger>
                <MultiSelectorInput placeholder="Select your framework" />
            </MultiSelectorTrigger>
            <MultiSelectorContent>
                <MultiSelectorList>
                    <SelectOption options={options} />
                </MultiSelectorList>
            </MultiSelectorContent>
        </MultiSelector>
    )
}
