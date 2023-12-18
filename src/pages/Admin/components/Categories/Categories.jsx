import React, { useContext } from 'react'
import { CategoryContext } from '../../../../context/CategoryContext'

const Categories = () => {
    const context = useContext(CategoryContext)

    return (
        <div>

            <select name='categories' className="form-select">
                <option value=''>Select category</option>
                {
                    context.categories && context.categories.map((category, index) => {
                        return (
                            <option value={category.id} key={index}>
                                {category.name}
                            </option>
                        )
                    })
                }
            </select>

        </div>
    )
}

export default Categories