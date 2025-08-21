// hooks
import { useState } from 'react';

const useProjectDataType = () => {
    const [isDataType, setDataType] = useState<'list' | 'table'>('list')

    const handleChange = (value: 'list' | 'table') => {
        setDataType(value)
    }

    return { isDataType, handleChange }
}

export default useProjectDataType