<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;

use App\Models\Entity;
use App\Models\Image;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use TCG\Voyager\Models\Category;
use TCG\Voyager\Models\Post;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Entity::where('status', 'PUBLISHED')->inRandomOrder()->limit(10)->with('city')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $post = new Entity();
        $post->title = $request->title;
        $post->body = $request->body;
        $post->author_id = $request->author_id;
        $post->category_id = $request->category_id;
        $post->slug = Str::slug($request->title);
        $post->price = $request->price;
        $post->mainImage = ((!empty($request->images[0])) ? $request->images[0] : "/storage/Images/Posts/default.png");
        $post->save();

        for ($i = 1; $i < count($request->images); $i++) {
            $image = new Image();
            $image->post_id = $post->id;
            $image->name = $request->images[$i];
            $image->save();
        }

        return response(["status" => 1, "post" => $post]);
    }

    public function byParameters(Request $request)
    {

        $searchData = array();
        $searchData = [
            'status' => 'PUBLISHED'
        ];
        if (!empty($request->search)) {
            //      array_push($searchData, ['title', 'LIKE', '%' . $request->search . '%']);
            $searchData += [['title', 'LIKE', '%' . $request->search . '%']];
        }
        if ($request->city_id != 0) {
            $searchData += ['city_id' => $request->city_id];
        }
        if ($request->category_id != 0) {
            $searchData += ['category_id' => $request->category_id];
        }
        if (!empty($request->minPrice)) {
            $searchData += [['price','>',$request->minPrice]];
        }
        if (!empty($request->maxPrice)) {
            $searchData += [['price','<',$request->maxPrice]];
        }
         // return $searchData;

        return response(['entity' => Entity::where($searchData)->with('city')->get(), 'status' => 6]);
        /* if (!empty($request->search)) {
             if ($request->city_id != 0) {
                 if ($request->category_id != 0) {
                     return response(['entity' => Entity::where([
                         'status' => 'PUBLISHED',
                         'city_id' => $request->city_id,
                         ['title', 'LIKE', '%' . 'Заг' . '%'],
                         'category_id' => $request->category_id])->with('city')->get(), 'status' => 1]);

                 } else {
                     return response(['entity' => Entity::where([
                         'status' => 'PUBLISHED',
                         'city_id' => $request->city_id,
                         ['title', 'LIKE', '%' . 'Заг' . '%'],
                     ])->with('city')->get(), 'status' => 2]);
                 }
             }
             if ($request->category_id != 0) {
                 return response(['entity' => Entity::where([
                     'status' => 'PUBLISHED',
                     'category_id' => $request->category_id,
                     ['title','LIKE','%'.'Заг'.'%']
                 ])->with('city')->get(), 'status' => 7]);
             }
             return response(['entity' => Entity::where([
                 ['title','LIKE','%'.'Заг'.'%']
             ])->with('city')->get(), 'status' => 8]);
         }

         if ($request->city_id != 0) {
             if ($request->category_id != 0) {
                 return response(['entity' => Entity::where([
                     'status' => 'PUBLISHED',
                     'city_id' => $request->city_id,
                     'category_id' => $request->category_id])->with('city')->get(), 'status' => 3]);
             } else {
                 return response(['entity' => Entity::where([
                     'status' => 'PUBLISHED',
                     'city_id' => $request->city_id,
                 ])->with('city')->get(), 'status' => 4]);
             }
         }
         if ($request->category_id != 0) {
             return response(['entity' => Entity::where([
                 'status' => 'PUBLISHED',
                 'category_id' => $request->category_id])->with('city')->get(), 'status' => 5]);
         }
         return response(['entity' => Entity::where('status', 'PUBLISHED')->with('city')->get(), 'status' => 6]);*/
    }

    public function byUser($id)
    {
        return Entity::where('author_id', $id)->orderBy('created_at', 'desc')->get();

    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $entity = Entity::where('id', $id)->where('status', 'PUBLISHED')->get();
        if (empty($entity[0]))
            return response(['post' => '']);
        $images = Image::where('post_id', $id)->get();
        $category = Category::where('id', $entity[0]->category_id)->get();
        $entity[0]->visited += 1;
        $entity[0]->save();
        $user = User::where('id', $entity[0]->author_id)->get();
        return response(["post" => $entity, 'images' => $images, 'category' => $category, 'user' => $user]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
