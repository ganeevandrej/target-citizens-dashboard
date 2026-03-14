export const updateCollectionItem = <Item extends { id: string }>(
    items: Item[],
    itemId: string,
    patch: Partial<Item>,
) => items.map((item) => (item.id === itemId ? { ...item, ...patch } : item))
