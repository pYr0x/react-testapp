<div onClick={ctx.changeMessage.bind(ctx, 'Julian!')}>
	<p>{ctx.state.attr('message')}</p>
	<p>{ctx.state.attr('firstname')}</p>
</div>