The solution is to ensure that the `keyExtractor` function always returns a unique string or number.  In this example, using `item.id.toString()` ensures each item has a unique key.

```javascript
<FlatList
  data={[{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]}
  renderItem={({ item }) => <Text>{item.name}</Text>}
  keyExtractor={(item) => item.id.toString()} // Correct
/>
```

It's crucial to select a key that will always be unique for each item in your data set.  If your data doesn't have a suitable unique identifier, you'll need to add one before rendering it in the FlatList.