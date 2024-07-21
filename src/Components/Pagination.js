import React, { useEffect, useState } from 'react'

export default function Pagination() {
    const [currentItems, setCurrentItems] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(16);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    return (
        <div>Pagination</div>
    )
}
