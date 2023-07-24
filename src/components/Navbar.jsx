import React,{ useEffect } from 'react'
import '../styles/Navbar.css'
import $ from 'jquery'
import { NavLink, Link } from 'react-router-dom'


const Navbar = () => {
	useEffect(() => {
		$('body').on('mouseenter mouseleave', '.nav-item', function (e) {
			if ($(window).width() > 750) {
				var _d = $(e.target).closest('.nav-item');
				_d.addClass('show');
				setTimeout(function () {
					_d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
				}, 1);
			}
		});
	}, []);
  return (
    <>
    {/* <!-- navbar --> */}
    <div class="navigation-wrap bg-light start-header start-style">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<nav class="navbar navbar-expand-md navbar-light">
					
					<NavLink to="/"><a class="navbar-brand"><img src="https://assets.codepen.io/1462889/fcy.png" alt=""/></a></NavLink>	
						
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						
						<div class="collapse navbar-collapse" id="navbarSupportedContent">
							<ul class="navbar-nav ml-auto py-4 py-md-0">
								{/* <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
									<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">All Department</a>
									<div class="dropdown-menu">
										<a class="dropdown-item" href="#">Men's</a>
										<a class="dropdown-item" href="#">Kid's</a>
										<a class="dropdown-item" href="#">Women's</a>
									</div>
								</li> */}
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<NavLink to="/"><a class="nav-link">Home</a></NavLink>
								</li>
								{/* <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Services</a>
									<div class="dropdown-menu">
										<a class="dropdown-item" href="#">Action</a>
										<a class="dropdown-item" href="#">Another action</a>
										<a class="dropdown-item" href="#">Something else here</a>
										<a class="dropdown-item" href="#">Another action</a>
									</div>
								</li> */}
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
									<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Collections</a>
									<div class="dropdown-menu">
									<NavLink to="/collection/men"><a class="dropdown-item">Men's</a></NavLink>
									{/* <a href='/ShriGopalGarmentS/collection/men' class="dropdown-item">Men's</a> */}
									<NavLink to="/collection/women"><a class="dropdown-item">Women's</a></NavLink>
									{/* <a href='/ShriGopalGarmentS/collection/women' class="dropdown-item">Women's</a> */}
									<NavLink to="/collection/kids"><a class="dropdown-item">Kid's</a></NavLink>
									{/* <a href='/ShriGopalGarmentS/collection/kids' class="dropdown-item">Kid's</a> */}
									</div>
								</li>
								{/* <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<NavLink to="/collection"><a class="nav-link">Collection</a></NavLink>
								</li> */}
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
								<NavLink to="/blog"><a class="nav-link">Blog</a></NavLink>
								</li>
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
								<NavLink to="/contact"><a class="nav-link">Contact</a></NavLink>
								</li>
							</ul>
						</div>
						
					</nav>		
				</div>
			</div>
		</div>
	</div>
    </>
  )
}

export default Navbar