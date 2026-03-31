<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Media;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MediaController extends Controller
{
    public function index(Request $request)
    {
        $query = Media::query()
            ->when($request->type,   fn($q, $v) => $q->where('type', $v))
            ->when($request->search, fn($q, $v) => $q->where('name', 'like', "%{$v}%"));

        return response()->json($query->latest()->paginate(24));
    }

    public function upload(Request $request)
    {
        $request->validate(['file' => 'required|file|max:10240']);

        $file  = $request->file('file');
        $path  = $file->store('media/' . now()->format('Y/m'), 'public');

        $media = Media::create([
            'name'        => $file->getClientOriginalName(),
            'path'        => $path,
            'url'         => Storage::url($path),
            'type'        => $this->resolveMediaType($file->getMimeType()),
            'mime_type'   => $file->getMimeType(),
            'size'        => $file->getSize(),
            'uploaded_by' => $request->user()->id,
        ]);

        return response()->json($media, 201);
    }

    public function show(Media $media)
    {
        return response()->json($media);
    }

    public function update(Request $request, Media $media)
    {
        $data = $request->validate([
            'alt'     => 'nullable|string|max:255',
            'caption' => 'nullable|string|max:500',
            'name'    => 'string|max:255',
        ]);
        $media->update($data);
        return response()->json($media);
    }

    public function destroy(Media $media)
    {
        Storage::disk('public')->delete($media->path);
        $media->delete();
        return response()->json(['message' => 'Media deleted']);
    }

    private function resolveMediaType(string $mime): string
    {
        if (str_starts_with($mime, 'image/')) return 'image';
        if (str_starts_with($mime, 'video/')) return 'video';
        if (str_starts_with($mime, 'audio/')) return 'audio';
        return 'document';
    }
}
