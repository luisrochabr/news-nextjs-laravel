<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\News>
 */
class NewsFactory extends Factory
{

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $categories = [
            (object) [
                'id' => 1,
                'name' => 'Negócios',
            ],
            (object) [
                'id' => 2,
                'name' => 'Renda Fixa',
            ],
            (object) [
                'id' => 3,
                'name' => 'Mercado',
            ]
        ];
        $image_id = random_int(1, 50);

        return [
            'id' => fake()->unique()->randomNumber(),
            'headline' => fake()->realText(20),
            'articleBody' => fake()->paragraph(),
            'imageUrl' => 'https://picsum.photos/id/' . $image_id . '/640/480',
            'slug' => fake()->slug(),
            'published_at' => now(),
            'category' => $categories[random_int(0, 2)],
        ];
    }
}
