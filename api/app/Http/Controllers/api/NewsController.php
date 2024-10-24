<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Support\Str;
use Illuminate\Http\Request;


class NewsController extends Controller
{
    protected $data;
    protected $res;

    public function __construct()
    {
        // $this->res = News::factory()->count(50)->make();
        $path = storage_path("json/test-data-api.json");
        $json = file_get_contents($path);
        $this->data = News::hydrate([json_decode($json, true)])[0];
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $collectionWhereLike = function ($collection, $key, $term) {
            $filtered = $collection->filter(fn($item) => Str::contains($item[$key], $term));
            $reIndexed = array_values($filtered->toArray());
            return collect($reIndexed);
        };

        $filtered = collect($this->data);
        if ($request->has('category')) {
            $category = $request->input('category');
            if ($category) {
                $result = $filtered->filter(fn($item) => $item['category']['id'] == $category);
                $reIndexed = array_values($result->toArray());
                $filtered = collect($reIndexed);
            }
        }
        if ($request->has('search')) {
            $search_term = $request->input('search');
            if (!is_null($search_term) and !empty($search_term)) {
                $headline = $collectionWhereLike($filtered, 'headline', $search_term);
                $articleBody = $collectionWhereLike($filtered, 'articleBody', $search_term);
                $result = array_merge(array_values($headline->toArray()), array_values($articleBody->toArray()));
                $filtered = collect($result);
            }
        }

        return response()->json($filtered->all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $new = collect($this->data)->where('slug', $slug)->first();
        return response()->json($new);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
