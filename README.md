<h1>Component Update Lifecyle=>By Props</h1>
<ol>
  <li>componentWillReceiveProps(nextProps)=>update props receive in the component by this method.But In the updated React version this method is not recommended to use</li>
  <li>shouldComponentUpdate(nextProps,nextState)=>this method control the component update</li>
  <li>componentWillUpdate(nextProps,nextState)=>this method indicate that component update before render.But In the updated React version this method is not recommended to use</li>
  <li>render()=>this method return the jsx of our component</li>
  <li>componentDidUpdate()=>this method is the last phase of our component update lifecycle by porps.using this method we can easily understand that component props updated successfully after render.</li>
</ol>
