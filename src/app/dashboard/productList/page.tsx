"use client";
import React from 'react'
import ProductItemDashboard from '@/components/templates/productList';


function ProductList() {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
				Product List
			</h2>
      <ProductItemDashboard/>
    </div>
  )
}

export default ProductList
