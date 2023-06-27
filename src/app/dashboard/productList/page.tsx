"use client";
import React from 'react'
import ProductItem from '@/components/organisms/productItem'


function ProductList() {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
				Product List
			</h2>
      <ProductItem/>
    </div>
  )
}

export default ProductList
