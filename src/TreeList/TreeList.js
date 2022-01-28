import Tree from './Tree';

export default function TreeList({
  coniferous, 
  deciduous }) {
  return <div className='trees-list'>
    <h1>Trees of the Pacific NW</h1>
    <h3>Coniferous:</h3>
    {
      coniferous.map(
        (tree, i) =>
          <Tree
            key={tree.name + i}
            {...tree}
          />)
    }
    <h3>Deciduous:</h3>
    {
      deciduous.map(
        (tree, i) =>
          <Tree
            key={tree.name + i}
            {...tree}
          />)
    }
  </div>;
}
