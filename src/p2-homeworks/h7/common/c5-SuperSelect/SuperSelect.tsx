import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options: Array<string>
    onChangeOption: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions = options.map((option, i) => {
        return <option key={option + '-' + i}>{option}</option>
    }); // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e)
        }
        onChangeOption(e.currentTarget.value)
    }

    return (<div>
            <select onChange={onChangeCallback}
                    {...restProps}>
                {mappedOptions}
            </select>
        </div>
    )
}

export default SuperSelect
